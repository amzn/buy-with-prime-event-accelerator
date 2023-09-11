import datetime
import json
from os import environ
import urllib.request
import boto3
from botocore.exceptions import ClientError

# Use this code snippet in your app.
# If you need more information about configurations
# or implementing the sample code, visit the AWS docs:
# https://aws.amazon.com/developer/language/python/

# secrets manager
def get_secret():
    secret_name = environ['BWP_SECRET_NAME']
    region_name = environ['AWS_REGION']
    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e

    # Decrypts secret using the associated KMS key.
    secret = get_secret_value_response['SecretString'] 
    CLIENT_ID = secret.client_id
    CLIENT_SECRET = secret.client_secret 

# Event hydration - Parsing orderId from the event payload
def lambda_handler(event, context):
    message = event['Records'][0]['body']
    json_message = json.loads(message)
    print(json_message)
    order_id=json_message['detail']['orderIdentifier']['orderId']
    print("=====================") 
    print("order ID is", order_id)
    query_api(order_id) 

def query_api(order_id):
    url = environ['MOCK_BWP_API']
    
    headers = {
        'Authorization': 'bearer custom-authorized', 
        'X-Omni-InstallationId': 'i34242', 
        'Content-Type': 'application/json'
    }
    # Road singleOrder query
    file_name = "singleOrder.graphql"
    f = open(file_name, 'r')
    single_order = f.read()
    print("singleOrder query loaded.")
    f.close()

    query = single_order
    # Setting order_id from the event payload as a variable
    variables = {"orderId": order_id}
    print("variables:", variables)
    data = json.dumps({"query": query, "variables": variables}).encode('utf-8')

    request = urllib.request.Request(url, data=data, headers=headers, method='POST')
    
    try:
        with urllib.request.urlopen(request) as response:
            response_data = response.read()
            response_text = response_data.decode('utf-8')
            # If the request is successful, create a json file and call write_item function. 
            if 'error' in str(response_data):
                print("response", response.status, response_text)
            else:
                # The file name is set as the timestamp. 
                file_name = str(datetime.datetime.now())[:-7]
                file = json.loads(response_text)
                write_item(file_name, file)
            return json.loads(response_text)
    except urllib.error.URLError as e:
        print("HTTP error:", e)
        return None

# Save the json file in Amazon S3 bucket.
def write_item(file_name, file):
    s3 = boto3.client('s3')
    bucket = environ['DATA_STORE_BUCKET']
    encode_file = bytes(json.dumps(file).encode('UTF-8'))
    s3.put_object(Bucket=bucket, Key=file_name, Body=encode_file)
