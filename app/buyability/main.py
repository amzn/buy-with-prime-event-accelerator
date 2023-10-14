import datetime
import json
from os import environ
import urllib.request
import boto3
from botocore.exceptions import ClientError
from requests.requests import Requests

# Use this code snippet in your app.
# If you need more information about configurations
# or implementing the sample code, visit the AWS docs:
# https://aws.amazon.com/developer/language/python/

url = environ['MOCK_BWP_API'] 
headers = {
    'Authorization': 'bearer custom-authorized', 
    'X-Omni-InstallationId': 'i34242', 
    'Content-Type': 'application/json'
}

    
# Event hydration - Parsing orderId from the event payload
def lambda_handler(event, context):
    message = event['Records'][0]['body']
    json_message = json.loads(message)
    print(json_message)
    print("=====================")
    event_type = json_message['detail-type']
    print("Event type: ", event_type)
    if event_type == "INVENTORY_AVAILABILITY_CHANGED":
        inventory_item_id = json_message['detail']['inventoryItemId']
        # query inventory
        query_inventory(url=url, headers=headers, inventory_item_id=inventory_item_id)
    if event_type == "santos.buyability.status.change":
        id_type = json_message['detail']['item']['identifierType']
        if id_type == "itemId":
            item_id = json_message['detail']['item']['identifierValue']
            # query_item(url=url, headers=headers, item_id=item_id)
            query_buyability(url=url, headers=headers, item_id=item_id)
        else:
            print("The identifierType is ", id_type)
            print("id_type is not itemID. Please check the event payload.")


def query_inventory(url, headers, inventory_item_id):
    # Road inventory query
    file_name = "inventory.graphql"
    f = open(file_name, 'r')
    inventory_query = f.read()
    print("inventory query is loaded.")
    f.close()
    
    query = inventory_query
    # Setting inventory item ID from the event payload as a variable
    variables = {"inventoryItemId": inventory_item_id}
    print("inventory item ID is", inventory_item_id)
    data = json.dumps({"query": query, "variables": variables}).encode('utf-8')

    request = urllib.request.Request(url, data=data, headers=headers, method='POST')
    
    # Create an object of class Requests.
    requests_instance = Requests(request)
    response_data = requests_instance.urllib_request()
    print("response_data's type?", type(response_data))

    if response_data is not None:
        response_json = json.dumps(response_data)
        print(response_json)
        
        # Extract External ID from the response.
        external_id = response_data['data']['inventoryItem']['mappingProduct']['externalId']
        print("External ID is ", external_id)
        print("=======================")
        buyable_amount = response_data['data']['inventoryItem']['buyableQuantity']['amount']
        buyable_unit = response_data['data']['inventoryItem']['buyableQuantity']['unit']
        print("Buyable Quantity: ", str(buyable_amount) + " " + buyable_unit)
        print("SKU: ", response_data['data']['inventoryItem']['mappingProduct']['sku'])
        print("Prime Intention: ", response_data['data']['inventoryItem']['mappingProduct']['isPrimeIntended'])  

    else:
        print("Request failed.")
       

def query_buyability(url, headers, item_id):
    # Road buyability query
    file_name = "buyability.graphql"
    f = open(file_name, 'r')
    buyability_query = f.read()
    print("buyability query is loaded.")
    f.close()

    query = buyability_query
    # Setting item ID from the event payload as a variable
    variables = {"ID": item_id}
    print("Item ID is", item_id)
    data = json.dumps({"query": query, "variables": variables}).encode('utf-8')

    request = urllib.request.Request(url, data=data, headers=headers, method='POST')
   
    # Translate Item ID to SKU
    query_item(url=url, headers=headers, item_id=item_id)
    
    # Create an object of class Requests.
    requests_instance = Requests(request)
    response_data = requests_instance.urllib_request()

    if response_data is not None:
        response_json = json.dumps(response_data)
        print(response_json)
        print("Buyability status: ", response_data['data']['buyability']['status'])
    else:
        print("Request failed.")   

    
def query_item(url, headers, item_id):    
    item_query = """
    query ItemByID ($itemId: String!){
      item(identifier: {space: ID, value: $itemId}) {
        id
        ... on BwPProduct {
          id
          catalogId
          sku
        }
      }
    }
    """

    # Setting item ID from the event payload as a variable
    variables = {"itemId": item_id}
    print("variables:", variables)
    data = json.dumps({"query": item_query, "variables": variables}).encode('utf-8')

    request = urllib.request.Request(url, data=data, headers=headers, method='POST')
    
    # Create an object of class Requests.
    requests_instance = Requests(request)
    response_data = requests_instance.urllib_request()

    if response_data is not None:
        response_json = json.dumps(response_data)
        print(response_json)
        item_id = response_data['data']['item']['id'] # double check
        sku = response_data['data']['item']['sku']
        print("Item ID is ", item_id, " and its sku is ", sku)
    else:
        print("Request failed.")