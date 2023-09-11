import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaEventsource from 'aws-cdk-lib/aws-lambda-event-sources';
import * as path from 'path';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';
require('dotenv').config()

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create AWS Secrets Manager for Buy with Prime
    const appCredential = new secretsmanager.Secret(this, 'ClientSecret', {
      secretName: 'bwp-oaut-credential',
      secretObjectValue: {
        client_id: cdk.SecretValue.unsafePlainText(process.env.CLIENT_ID!),
        client_secret: cdk.SecretValue.unsafePlainText(process.env.CLIENT_SECRET!)
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    // Create Amazon EventBridge and event queue    
    const eventBus = cdk.aws_events.EventBus.fromEventBusArn(this, 'EventBus', process.env.EVENT_BUS_ARN!) 
    
    const dlq = new sqs.Queue(this, 'DeadLetterQueue')
    const queue = new sqs.Queue(this, 'Queue', {
      visibilityTimeout: cdk.Duration.seconds(300),
      deadLetterQueue: {
        maxReceiveCount: 10,
        queue: dlq
      }
    });

    // Use existing S3 bucket
    const bucket = cdk.aws_s3.Bucket.fromBucketArn(this, 'event-store', process.env.S3_BUCKET_ARN!) 
 
    // Create a Lambda for Event Hydration and API Call
    const eventLambda = new lambda.Function(this, 'EventLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_10,
      code: lambda.Code.fromAsset(path.join(__dirname, `../app`)),
      handler: 'main.lambda_handler', 
      timeout: cdk.Duration.seconds(10), 
      environment: {
        BWP_SECRET_NAME: appCredential.secretName,
        DATA_STORE_BUCKET: bucket.bucketName,
        MOCK_BWP_API: process.env.MOCK_BWP_API!
      }
    })
    eventLambda.addEventSource(new lambdaEventsource.SqsEventSource(queue))


    // Grant S3 access to Lambda 
    const s3BucketAccessPolicy = new iam.PolicyStatement({
      actions: ['s3:*', 's3-object-lambda:*'],
      effect: iam.Effect.ALLOW,
      resources: [bucket.bucketArn, bucket.bucketArn+"/*"],
    });

    // Grant S3 access to Lambda 
    const s3BucketDenyPolicy = new iam.PolicyStatement({
      actions: ['s3:delete*'],
      effect: iam.Effect.DENY,
      resources: [bucket.bucketArn, bucket.bucketArn+"/*"],
    });

    // 👇 add the policy to the Function's role
    eventLambda.role?.attachInlinePolicy(
      new iam.Policy(this, 'event-bucket-policy', {
        statements: [s3BucketAccessPolicy, s3BucketDenyPolicy],
      }),
    );
    
    // Create an EventBridge Rule
    const orderRule = new cdk.aws_events.Rule(this, 'OrderEventRule', {
      eventBus: eventBus,
      eventPattern: {
        source: [{prefix: ""}] as any[] // All events
      },
      // eventPattern: {
      //   "detail": {
      //     "eventType": ["REFUND_SUCCESS"]   // Event pattern example for each event type. 
      //   }
      // },
      // eventPattern: {
      //   "detail": {
      //     "eventType": ["ORDER_PLACED", "ORDER_UPDATED"]
      //   }
      // },
      targets: [new cdk.aws_events_targets.SqsQueue(queue, {
        deadLetterQueue: dlq
      })]
    }) 
  }
}

