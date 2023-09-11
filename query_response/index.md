### Sample response of 'order' query with mulitple line item details.
```
{
  "data": {
    "order": {
      "id": "322-6XP3-AQWKKF",
      "orderState": {
        "createdAt": 1685575902964,
        "placedAt": 1685575952302
      },
      "lineItems": [
        {
          "id": "b71d9672c7-0b89d012d0",
          "quantity": {
            "unit": "ONE",
            "amount": 2
          },
          "createdAt": 1685575902963,
          "purchasedItem": {
            "itemURI": "catalogs/rcw6zkov89go1o/items/mcs6fyncn2ue1r",
            "title": "KAWACH K-1110 LED Motion Sensor Headlamp,Hands Free Ultra-Low Profile,300 High Lumen LED Output, 220°Area Illumination,Multiple Light Modes,Great for Running, Cycling, Hiking,AAA Battery Powered,Grey",
            "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/t2dbt3j8uy6t1u/221efac4-79ee-4a8c-8134-f644eabcb750.jpeg",
            "altText": "",
            "price": {
              "currentPrice": {
                "currencyCode": "USD",
                "amount": 25
              }
            }
          },
          "product": {
            "id": "mcs6fyncn2ue1r",
            "catalogId": "rcw6zkov89go1o",
            "title": "KAWACH K-1110 LED Motion Sensor Headlamp,Hands Free Ultra-Low Profile,300 High Lumen LED Output, 220°Area Illumination,Multiple Light Modes,Great for Running, Cycling, Hiking,AAA Battery Powered,Grey",
            "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/t2dbt3j8uy6t1u/221efac4-79ee-4a8c-8134-f644eabcb750.jpeg",
            "price": 25,
            "currencyCode": "USD",
            "sku": "SK-B08Y675271"
          },
          "itemContext": {
            "productDetailPageUrl": "https://www.myshopify.com"
          },
          "shipments": [
            {
              "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
              "state": "FULFILLMENT_IN_PROGRESS",
              "estimatedDeliveryAt": null,
              "fulfiller": "AMAZON",
              "trackingDetail": null,
              "associated": [
                {
                  "lineItem": {
                    "id": "b71d9672c7-0b89d012d0",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 2
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "mcs6fyncn2ue1r",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "KAWACH K-1110 LED Motion Sensor Headlamp,Hands Free Ultra-Low Profile,300 High Lumen LED Output, 220°Area Illumination,Multiple Light Modes,Great for Running, Cycling, Hiking,AAA Battery Powered,Grey",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/t2dbt3j8uy6t1u/221efac4-79ee-4a8c-8134-f644eabcb750.jpeg",
                      "price": 25,
                      "currencyCode": "USD",
                      "sku": "SK-B08Y675271"
                    }
                  },
                  "interval": {
                    "measure": "2",
                    "start": "0"
                  }
                },
                {
                  "lineItem": {
                    "id": "6a7826cdf1-05d8cde8aa",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 1
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "9dexa7b1dwsac2",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "Best Pet Supplies - Voyager Waterproof Dogs Rain Poncho, Yellow, X-Small, Chest: 12.5\" ~ 16\" (253-YW-XS)",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/prto36719k6v10/263bfc15-6bc2-4001-a12f-953c915bb850.jpeg",
                      "price": 16,
                      "currencyCode": "USD",
                      "sku": "SK-B06XNJLTWT"
                    }
                  },
                  "interval": {
                    "measure": "1",
                    "start": "0"
                  }
                },
                {
                  "lineItem": {
                    "id": "fc85ce3156-94e6e7cb18",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 1
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "ppv0xz4v8l8l1q",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker, Fun for Indoor Puppies and Senior Pups, Plush No Mess Chew and Play - Yellow…",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/wux1lbm02rxw13/284ea0de-c8eb-406a-a0c8-9953fae257e8.jpeg",
                      "price": 12,
                      "currencyCode": "USD",
                      "sku": "SK-B09BBM5CX8"
                    }
                  },
                  "interval": {
                    "measure": "1",
                    "start": "0"
                  }
                }
              ]
            }
          ],
          "salesTax": {
            "taxRate": 0.1025,
            "taxableAmount": {
              "currencyCode": "USD",
              "amount": 46.8
            },
            "collectableTaxAmount": {
              "currencyCode": "USD",
              "amount": 4.8
            },
            "collectableTaxAmountPerUnit": {
              "currencyCode": "USD",
              "amount": 2.4
            },
            "jurisdictionDetails": {
              "amount": {
                "stateTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 46.8
                },
                "cityTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 46.8
                },
                "countyTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.14
                },
                "countyTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 46.8
                },
                "districtTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 1.08
                },
                "stateTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 3.04
                },
                "cityTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.54
                },
                "districtTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 46.8
                }
              },
              "level": {
                "city": "SEATTLE",
                "district": null,
                "county": "KING",
                "stateCode": "WA"
              },
              "rate": {
                "stateTaxRate": 0.065,
                "cityTaxRate": 0.0115,
                "countyTaxRate": 0.003,
                "districtTaxRate": 0.023
              }
            },
            "taxNexus": "DESTINATION",
            "taxCalculationSource": "TAX_JAR",
            "taxCategoryDetails": null
          }
        },
        {
          "id": "fc85ce3156-94e6e7cb18",
          "quantity": {
            "unit": "ONE",
            "amount": 1
          },
          "createdAt": 1685575902963,
          "purchasedItem": {
            "itemURI": "catalogs/rcw6zkov89go1o/items/ppv0xz4v8l8l1q",
            "title": "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker, Fun for Indoor Puppies and Senior Pups, Plush No Mess Chew and Play - Yellow…",
            "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/wux1lbm02rxw13/284ea0de-c8eb-406a-a0c8-9953fae257e8.jpeg",
            "altText": null,
            "price": {
              "currentPrice": {
                "currencyCode": "USD",
                "amount": 12
              }
            }
          },
          "product": {
            "id": "ppv0xz4v8l8l1q",
            "catalogId": "rcw6zkov89go1o",
            "title": "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker, Fun for Indoor Puppies and Senior Pups, Plush No Mess Chew and Play - Yellow…",
            "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/wux1lbm02rxw13/284ea0de-c8eb-406a-a0c8-9953fae257e8.jpeg",
            "price": 12,
            "currencyCode": "USD",
            "sku": "SK-B09BBM5CX8"
          },
          "itemContext": {
            "productDetailPageUrl": "https://www.myshopify.com"
          },
          "shipments": [
            {
              "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
              "state": "FULFILLMENT_IN_PROGRESS",
              "estimatedDeliveryAt": null,
              "fulfiller": "AMAZON",
              "trackingDetail": null,
              "associated": [
                {
                  "lineItem": {
                    "id": "b71d9672c7-0b89d012d0",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 2
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "mcs6fyncn2ue1r",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "KAWACH K-1110 LED Motion Sensor Headlamp,Hands Free Ultra-Low Profile,300 High Lumen LED Output, 220°Area Illumination,Multiple Light Modes,Great for Running, Cycling, Hiking,AAA Battery Powered,Grey",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/t2dbt3j8uy6t1u/221efac4-79ee-4a8c-8134-f644eabcb750.jpeg",
                      "price": 25,
                      "currencyCode": "USD",
                      "sku": "SK-B08Y675271"
                    }
                  },
                  "interval": {
                    "measure": "2",
                    "start": "0"
                  }
                },
                {
                  "lineItem": {
                    "id": "6a7826cdf1-05d8cde8aa",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 1
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "9dexa7b1dwsac2",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "Best Pet Supplies - Voyager Waterproof Dogs Rain Poncho, Yellow, X-Small, Chest: 12.5\" ~ 16\" (253-YW-XS)",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/prto36719k6v10/263bfc15-6bc2-4001-a12f-953c915bb850.jpeg",
                      "price": 16,
                      "currencyCode": "USD",
                      "sku": "SK-B06XNJLTWT"
                    }
                  },
                  "interval": {
                    "measure": "1",
                    "start": "0"
                  }
                },
                {
                  "lineItem": {
                    "id": "fc85ce3156-94e6e7cb18",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 1
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "ppv0xz4v8l8l1q",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker, Fun for Indoor Puppies and Senior Pups, Plush No Mess Chew and Play - Yellow…",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/wux1lbm02rxw13/284ea0de-c8eb-406a-a0c8-9953fae257e8.jpeg",
                      "price": 12,
                      "currencyCode": "USD",
                      "sku": "SK-B09BBM5CX8"
                    }
                  },
                  "interval": {
                    "measure": "1",
                    "start": "0"
                  }
                }
              ]
            }
          ],
          "salesTax": {
            "taxRate": 0.1025,
            "taxableAmount": {
              "currencyCode": "USD",
              "amount": 11.24
            },
            "collectableTaxAmount": {
              "currencyCode": "USD",
              "amount": 1.15
            },
            "collectableTaxAmountPerUnit": {
              "currencyCode": "USD",
              "amount": 1.15
            },
            "jurisdictionDetails": {
              "amount": {
                "stateTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 11.24
                },
                "cityTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 11.24
                },
                "countyTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.03
                },
                "countyTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 11.24
                },
                "districtTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.26
                },
                "stateTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.73
                },
                "cityTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.13
                },
                "districtTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 11.24
                }
              },
              "level": {
                "city": "SEATTLE",
                "district": null,
                "county": "KING",
                "stateCode": "WA"
              },
              "rate": {
                "stateTaxRate": 0.065,
                "cityTaxRate": 0.0115,
                "countyTaxRate": 0.003,
                "districtTaxRate": 0.023
              }
            },
            "taxNexus": "DESTINATION",
            "taxCalculationSource": "TAX_JAR",
            "taxCategoryDetails": null
          }
        },
        {
          "id": "6a7826cdf1-05d8cde8aa",
          "quantity": {
            "unit": "ONE",
            "amount": 1
          },
          "createdAt": 1685575902963,
          "purchasedItem": {
            "itemURI": "catalogs/rcw6zkov89go1o/items/9dexa7b1dwsac2",
            "title": "Best Pet Supplies - Voyager Waterproof Dogs Rain Poncho, Yellow, X-Small, Chest: 12.5\" ~ 16\" (253-YW-XS)",
            "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/prto36719k6v10/263bfc15-6bc2-4001-a12f-953c915bb850.jpeg",
            "altText": "",
            "price": {
              "currentPrice": {
                "currencyCode": "USD",
                "amount": 16
              }
            }
          },
          "product": {
            "id": "9dexa7b1dwsac2",
            "catalogId": "rcw6zkov89go1o",
            "title": "Best Pet Supplies - Voyager Waterproof Dogs Rain Poncho, Yellow, X-Small, Chest: 12.5\" ~ 16\" (253-YW-XS)",
            "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/prto36719k6v10/263bfc15-6bc2-4001-a12f-953c915bb850.jpeg",
            "price": 16,
            "currencyCode": "USD",
            "sku": "SK-B06XNJLTWT"
          },
          "itemContext": {
            "productDetailPageUrl": "https://www.myshopify.com"
          },
          "shipments": [
            {
              "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
              "state": "FULFILLMENT_IN_PROGRESS",
              "estimatedDeliveryAt": null,
              "fulfiller": "AMAZON",
              "trackingDetail": null,
              "associated": [
                {
                  "lineItem": {
                    "id": "b71d9672c7-0b89d012d0",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 2
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "mcs6fyncn2ue1r",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "KAWACH K-1110 LED Motion Sensor Headlamp,Hands Free Ultra-Low Profile,300 High Lumen LED Output, 220°Area Illumination,Multiple Light Modes,Great for Running, Cycling, Hiking,AAA Battery Powered,Grey",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/t2dbt3j8uy6t1u/221efac4-79ee-4a8c-8134-f644eabcb750.jpeg",
                      "price": 25,
                      "currencyCode": "USD",
                      "sku": "SK-B08Y675271"
                    }
                  },
                  "interval": {
                    "measure": "2",
                    "start": "0"
                  }
                },
                {
                  "lineItem": {
                    "id": "6a7826cdf1-05d8cde8aa",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 1
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "9dexa7b1dwsac2",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "Best Pet Supplies - Voyager Waterproof Dogs Rain Poncho, Yellow, X-Small, Chest: 12.5\" ~ 16\" (253-YW-XS)",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/prto36719k6v10/263bfc15-6bc2-4001-a12f-953c915bb850.jpeg",
                      "price": 16,
                      "currencyCode": "USD",
                      "sku": "SK-B06XNJLTWT"
                    }
                  },
                  "interval": {
                    "measure": "1",
                    "start": "0"
                  }
                },
                {
                  "lineItem": {
                    "id": "fc85ce3156-94e6e7cb18",
                    "quantity": {
                      "unit": "ONE",
                      "amount": 1
                    },
                    "createdAt": 1685575902963,
                    "product": {
                      "id": "ppv0xz4v8l8l1q",
                      "catalogId": "rcw6zkov89go1o",
                      "title": "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker, Fun for Indoor Puppies and Senior Pups, Plush No Mess Chew and Play - Yellow…",
                      "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/wux1lbm02rxw13/284ea0de-c8eb-406a-a0c8-9953fae257e8.jpeg",
                      "price": 12,
                      "currencyCode": "USD",
                      "sku": "SK-B09BBM5CX8"
                    }
                  },
                  "interval": {
                    "measure": "1",
                    "start": "0"
                  }
                }
              ]
            }
          ],
          "salesTax": {
            "taxRate": 0.1025,
            "taxableAmount": {
              "currencyCode": "USD",
              "amount": 14.97
            },
            "collectableTaxAmount": {
              "currencyCode": "USD",
              "amount": 1.53
            },
            "collectableTaxAmountPerUnit": {
              "currencyCode": "USD",
              "amount": 1.53
            },
            "jurisdictionDetails": {
              "amount": {
                "stateTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 14.97
                },
                "cityTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 14.97
                },
                "countyTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.04
                },
                "countyTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 14.97
                },
                "districtTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.34
                },
                "stateTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.97
                },
                "cityTaxCollectableAmount": {
                  "currencyCode": "USD",
                  "amount": 0.17
                },
                "districtTaxableAmount": {
                  "currencyCode": "USD",
                  "amount": 14.97
                }
              },
              "level": {
                "city": "SEATTLE",
                "district": null,
                "county": "KING",
                "stateCode": "WA"
              },
              "rate": {
                "stateTaxRate": 0.065,
                "cityTaxRate": 0.0115,
                "countyTaxRate": 0.003,
                "districtTaxRate": 0.023
              }
            },
            "taxNexus": "DESTINATION",
            "taxCalculationSource": "TAX_JAR",
            "taxCategoryDetails": null
          }
        }
      ],
      "clientDetails": {
        "browserFingerprint": {
          "browserType": "Chrome",
          "browserVersion": "100.0.4896.127",
          "browserPlatform": "desktop",
          "browserTimezone": "UTC"
        },
        "ipFingerprint": null
      },
      "payments": [
        {
          "amount": {
            "currencyCode": "USD",
            "amount": 80.48
          },
          "confirmedAt": 1685575954165,
          "updatedAt": null,
          "createdAt": 1685575903426,
          "state": "CAPTURED",
          "paymentMethodType": "AMAZON_PAY_EXPRESS",
          "billingAddress": null
        }
      ],
      "summary": {
        "rollupCharges": [
          {
            "rollupChargeType": "DISCOUNT",
            "value": {
              "currencyCode": "USD",
              "amount": -5
            }
          },
          {
            "rollupChargeType": "ORDER_SUB_TOTAL",
            "value": {
              "currencyCode": "USD",
              "amount": 78
            }
          },
          {
            "rollupChargeType": "ORDER_TAX",
            "value": {
              "currencyCode": "USD",
              "amount": 7.48
            }
          },
          {
            "rollupChargeType": "ORDER_SHIPPING",
            "value": {
              "currencyCode": "USD",
              "amount": 0
            }
          }
        ],
        "totalPrice": {
          "currencyCode": "USD",
          "amount": 80.48
        }
      },
      "shipments": [
        {
          "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
          "state": "FULFILLMENT_IN_PROGRESS",
          "estimatedDeliveryAt": null,
          "fulfiller": "AMAZON",
          "trackingDetail": null,
          "associated": [
            {
              "lineItem": {
                "id": "b71d9672c7-0b89d012d0",
                "quantity": {
                  "unit": "ONE",
                  "amount": 2
                },
                "createdAt": 1685575902963,
                "product": {
                  "id": "mcs6fyncn2ue1r",
                  "catalogId": "rcw6zkov89go1o",
                  "title": "KAWACH K-1110 LED Motion Sensor Headlamp,Hands Free Ultra-Low Profile,300 High Lumen LED Output, 220°Area Illumination,Multiple Light Modes,Great for Running, Cycling, Hiking,AAA Battery Powered,Grey",
                  "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/t2dbt3j8uy6t1u/221efac4-79ee-4a8c-8134-f644eabcb750.jpeg",
                  "price": 25,
                  "currencyCode": "USD",
                  "sku": "SK-B08Y675271"
                },
                "shipments": [
                  {
                    "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
                    "state": "FULFILLMENT_IN_PROGRESS",
                    "estimatedDeliveryAt": null,
                    "fulfiller": "AMAZON",
                    "trackingDetail": null
                  }
                ]
              },
              "interval": {
                "measure": "2",
                "start": "0"
              }
            },
            {
              "lineItem": {
                "id": "6a7826cdf1-05d8cde8aa",
                "quantity": {
                  "unit": "ONE",
                  "amount": 1
                },
                "createdAt": 1685575902963,
                "product": {
                  "id": "9dexa7b1dwsac2",
                  "catalogId": "rcw6zkov89go1o",
                  "title": "Best Pet Supplies - Voyager Waterproof Dogs Rain Poncho, Yellow, X-Small, Chest: 12.5\" ~ 16\" (253-YW-XS)",
                  "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/prto36719k6v10/263bfc15-6bc2-4001-a12f-953c915bb850.jpeg",
                  "price": 16,
                  "currencyCode": "USD",
                  "sku": "SK-B06XNJLTWT"
                },
                "shipments": [
                  {
                    "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
                    "state": "FULFILLMENT_IN_PROGRESS",
                    "estimatedDeliveryAt": null,
                    "fulfiller": "AMAZON",
                    "trackingDetail": null
                  }
                ]
              },
              "interval": {
                "measure": "1",
                "start": "0"
              }
            },
            {
              "lineItem": {
                "id": "fc85ce3156-94e6e7cb18",
                "quantity": {
                  "unit": "ONE",
                  "amount": 1
                },
                "createdAt": 1685575902963,
                "product": {
                  "id": "ppv0xz4v8l8l1q",
                  "catalogId": "rcw6zkov89go1o",
                  "title": "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker, Fun for Indoor Puppies and Senior Pups, Plush No Mess Chew and Play - Yellow…",
                  "imageUrl": "https://amazon-omni-cdn.com/vxlp728im16/wux1lbm02rxw13/284ea0de-c8eb-406a-a0c8-9953fae257e8.jpeg",
                  "price": 12,
                  "currencyCode": "USD",
                  "sku": "SK-B09BBM5CX8"
                },
                "shipments": [
                  {
                    "id": "d5013dfc-2ae6-4f58-bc69-cae5d5323d30",
                    "state": "FULFILLMENT_IN_PROGRESS",
                    "estimatedDeliveryAt": null,
                    "fulfiller": "AMAZON",
                    "trackingDetail": null
                  }
                ]
              },
              "interval": {
                "measure": "1",
                "start": "0"
              }
            }
          ]
        }
      ],
      "deliveryOptions": [
        {
          "id": "5060887210",
          "deliveryOptionTransfer": {
            "deliveryOptionName": "Fri, Jun 2",
            "shippingBenefitsMessage": "Prime Delivery",
            "shipDate": null,
            "deliveryDate": {
              "earliest": 1685761200000,
              "latest": 1685761200000
            }
          },
          "shippingCharge": {
            "money": {
              "currencyCode": "USD",
              "amount": 0
            }
          },
          "shippingAddress": {
            "id": "50daee1975954ce3950e4b8cb04fd280",
            "streetAddress": "HOUDINI NORTH 399 FAIRVIEW AVE N",
            "postalCode": "98109-5314",
            "locality": "SEATTLE",
            "region": "WA",
            "countryCode": "US",
            "extendedAddress": null
          },
          "associated": [
            {
              "interval": null,
              "lineItem": {
                "id": "b71d9672c7-0b89d012d0"
              }
            },
            {
              "interval": null,
              "lineItem": {
                "id": "fc85ce3156-94e6e7cb18"
              }
            },
            {
              "interval": null,
              "lineItem": {
                "id": "6a7826cdf1-05d8cde8aa"
              }
            }
          ]
        }
      ],
      "customer": {
        "contact": {
          "id": "707c825f-f030-45b4-ade0-7d7a6a17a37f",
          "name": "Buyer2",
          "email": "Buyer2+sandbox@amazon.com"
        }
      },
      "recipients": [
        {
          "shippingAddress": {
            "id": "50daee1975954ce3950e4b8cb04fd280",
            "streetAddress": "HOUDINI NORTH 399 FAIRVIEW AVE N",
            "postalCode": "98109-5314",
            "locality": "SEATTLE",
            "region": "WA",
            "countryCode": "US",
            "extendedAddress": null
          }
        }
      ],
      "payers": [
        {
          "id": "amzn1.account.AFOG7XFF2FD3HHM7TNYAXMHMTKDA"
        }
      ],
      "refundPayments": [],
      "returnFulfillments": [],
      "returnEligibilities": [
        {
          "isReturnable": false,
          "returnBy": -9223372036854776000,
          "associated": [
            {
              "interval": {
                "start": "0",
                "measure": "2"
              },
              "lineItem": {
                "id": "b71d9672c7-0b89d012d0"
              }
            }
          ]
        },
        {
          "isReturnable": false,
          "returnBy": -9223372036854776000,
          "associated": [
            {
              "interval": {
                "start": "0",
                "measure": "1"
              },
              "lineItem": {
                "id": "fc85ce3156-94e6e7cb18"
              }
            }
          ]
        },
        {
          "isReturnable": false,
          "returnBy": -9223372036854776000,
          "associated": [
            {
              "interval": {
                "start": "0",
                "measure": "1"
              },
              "lineItem": {
                "id": "6a7826cdf1-05d8cde8aa"
              }
            }
          ]
        }
      ],
      "cancellationEligibilities": [
        {
          "isCancelable": true,
          "associated": [
            {
              "lineItem": {
                "id": "b71d9672c7-0b89d012d0",
                "quantity": {
                  "unit": "ONE",
                  "amount": 2
                }
              }
            },
            {
              "lineItem": {
                "id": "6a7826cdf1-05d8cde8aa",
                "quantity": {
                  "unit": "ONE",
                  "amount": 1
                }
              }
            },
            {
              "lineItem": {
                "id": "fc85ce3156-94e6e7cb18",
                "quantity": {
                  "unit": "ONE",
                  "amount": 1
                }
              }
            }
          ]
        }
      ]
    }
  },
  "extensions": {}
}

```
