### Sample response of 'inventoryItem' query.
```
{
    "data": {
        "inventoryItem": {
            "buyableQuantity": {
                "amount": 14.0,
                "unit": "DAYS"
            },
            "inventoryItemId": "w6ibvyca8tmh83",
            "mappingProduct": {
                "externalId": "80f03b07-55d7-4644-a7d9-3d72f64113c3",
                "id": "w6ibvyca8tmh83",
                "isPrimeIntended": true,
                "sku": "f572650a-73a1-4b46-83d8-a4b79b7cac1b",
                "url": "https://testurl"
            }
        }
    }
}
<!-- 
```
{
  "data": {
    "inventoryItem": {
      "inventoryItemId": "value-received-from-inventory",
      "buyableQuantity": {
        "unit": "UNIT",
        "amount": 0
      },
      "mappingProduct": {
        "externalId": {
          "value": "external-id-for-the-item"
        }
      }
    }
  }
}
``` -->