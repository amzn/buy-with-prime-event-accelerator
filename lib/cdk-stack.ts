import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaEventsource from 'aws-cdk-lib/aws-lambda-event-sources';
import * as path from 'path';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as logs from 'aws-cdk-lib/aws-logs'
require('dotenv').config()

export class EventAcceleratorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create AWS Secrets Manager for Buy with Prime
    const appCredential = new secretsmanager.Secret(this, 'ClientSecret', {
      secretName: 'bwp-oauth-credential',
      secretObjectValue: {
        client_id: cdk.SecretValue.unsafePlainText(process.env.CLIENT_ID!),
        client_secret: cdk.SecretValue.unsafePlainText(process.env.CLIENT_SECRET!)
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    // Create S3 bucket
    // const bucket = cdk.aws_s3.Bucket.fromBucketArn(this, 'event-store', process.env.S3_BUCKET_ARN!) 
    const bucket = new s3.Bucket(this, 'BuywithPrimeDataBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY // S3 bucket is deleted only when empty. If not, you need to manually delete the S3 bucket.
    })

    // Create Amazon EventBridge and event queue for Order events
    const eventBus = cdk.aws_events.EventBus.fromEventBusArn(this, 'EventBus', process.env.EVENT_BUS_ARN!) 
    
    const orderDlq = new sqs.Queue(this, 'OrderDeadLetterQueue')
    const orderQueue = new sqs.Queue(this, 'OrderQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
      deadLetterQueue: {
        maxReceiveCount: 10,
        queue: orderDlq
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // Create Amazon EventBridge and event queue for Buyability event
    const buyabilityDlq = new sqs.Queue(this, 'BuyabilityDeadLetterQueue')
    const buyabilityQueue = new sqs.Queue(this, 'BuyabilityQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
      deadLetterQueue: {
        maxReceiveCount: 10,
        queue: buyabilityDlq
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // Create a Lambda for Order Event Hydration and API Call
    const orderEventLambda = new lambda.Function(this, 'OrderEventLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_10,
      code: lambda.Code.fromAsset(path.join(__dirname, `../app/order`)),
      handler: 'main.lambda_handler', 
      timeout: cdk.Duration.seconds(10), 
      environment: {
        BWP_SECRET_NAME: appCredential.secretName,
        DATA_STORE_BUCKET: bucket.bucketName,
        MOCK_BWP_API: process.env.MOCK_BWP_API!
      },
      logRetention: logs.RetentionDays.ONE_MONTH // You can customize the period.
    })
    orderEventLambda.addEventSource(new lambdaEventsource.SqsEventSource(orderQueue))
    new cdk.CfnOutput(this, 'orderLambdaFunction', { value: orderEventLambda.functionArn })

    // Create a Lambda for Buyability Event Hydration and API Call
    const buyabilityEventLambda = new lambda.Function(this, 'BuyabilityEventLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_10,
      code: lambda.Code.fromAsset(path.join(__dirname, `../app/buyability`)),
      handler: 'main.lambda_handler', 
      timeout: cdk.Duration.seconds(10), 
      environment: {
        BWP_SECRET_NAME: appCredential.secretName,
        DATA_STORE_BUCKET: bucket.bucketName,
        MOCK_BWP_API: process.env.MOCK_BWP_API!
      },
      logRetention: logs.RetentionDays.ONE_MONTH // You can customize the period.
    })
    buyabilityEventLambda.addEventSource(new lambdaEventsource.SqsEventSource(buyabilityQueue))
    new cdk.CfnOutput(this, 'buyabilityLambdaFunction', { value: buyabilityEventLambda.functionArn })

    // Grant S3 allow policy to Lambda Functions
    const s3BucketAccessPolicy = new iam.PolicyStatement({
      actions: ['s3:*', 's3-object-lambda:*'],
      effect: iam.Effect.ALLOW,
      resources: [bucket.bucketArn, bucket.bucketArn+"/*"],
    });
    new cdk.CfnOutput(this, 'DataStoreS3BucketName', { value: bucket.bucketName })

    // Grant S3 deny policy to Lambda Functions
    const s3BucketDenyPolicy = new iam.PolicyStatement({
      actions: ['s3:delete*'],
      effect: iam.Effect.DENY,
      resources: [bucket.bucketArn, bucket.bucketArn+"/*"],
    });

    // Add the policy to the Function's role
    orderEventLambda.role?.attachInlinePolicy(
      new iam.Policy(this, 'order-event-bucket-policy', {
        statements: [s3BucketAccessPolicy, s3BucketDenyPolicy],
      }),
    );

    buyabilityEventLambda.role?.attachInlinePolicy(
      new iam.Policy(this, 'buyability-event-bucket-policy', {
        statements: [s3BucketAccessPolicy, s3BucketDenyPolicy],
      }),
    );
    
    // Create an EventBridge Rule for order events
    const orderRule = new cdk.aws_events.Rule(this, 'OrderEventRule', {
      eventBus: eventBus,
      eventPattern: {
        "detail": {
          "eventType": ["ORDER_PLACED", "ORDER_UPDATED", "REFUND_SUCCESS"]
        }
      },
      targets: [new cdk.aws_events_targets.SqsQueue(orderQueue, {
        deadLetterQueue: orderDlq
      })]
    }) 

    // Create an EventBridge Rule for buyability events
    const buyabilityRule = new cdk.aws_events.Rule(this, 'BuyabilityEventRule', {
      eventBus: eventBus,
      eventPattern: {
        "detailType": ["santos.buyability.status.change"]
        // "detail-type": ["BUYABILITY_EVENT"]
      },
      targets: [new cdk.aws_events_targets.SqsQueue(buyabilityQueue, {
        deadLetterQueue: buyabilityDlq
      })]
      })
  }
}

