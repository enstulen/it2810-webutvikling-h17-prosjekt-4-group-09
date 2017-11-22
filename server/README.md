Server
======

Install packages

```
cd server/
npm install
```

Run locally

```
npm run webserver
```

Build for prod

```
npm run build
```

Serve build

```
npm run serve
```

Run tests

```
npm run test
```

Documentation
=============


### API Resources

  - [GET /products](#get-products)
  - [GET /products/[code]](#get-productscode)
  - [POST /magazines/[id]/articles](#post-magazinesidarticles)

### GET /products

Example: http://it2810-09.idi.ntnu.no:3000/products

Can be queried:

default: 

´´´from=0´´´

´´´limit=25´´´

´´´search=''´´´

´´´sort=-apk´´´

´´´category=''´´´

Example: http://it2810-09.idi.ntnu.no:3000/products?from=25&limit=10&search=som&sort=-price




Response body:

  [
    products
  ]

### GET /magazines/[id]

Example:  http://it2810-09.idi.ntnu.no:3000/products/9891001

Response body:

    {
      "_id":"59fefeeb1cdfdcb911b774ca",
      "code":"9891001",
      "name":"Faxe Extra Strong Beer",
      "productType":"Lys lager",
      "abv":10,
      "url":"https://www.vinmonopolet.no/vmpSite/Land/Danmark/Faxe-Extra-Strong-Beer/p/9891001",
      "price":119.5,
      "pricePerLiter":119.5,
      "images":{"thumbnail":"https://bilder.vinmonopolet.no/cache/95x95-0/9891001-1.jpg",
      "big":"https://bilder.vinmonopolet.no/cache/300x300-0/9891001-1.jpg"},
      "barcode":null,
      "containerSize":1,
      "containerType":"Metallemballasje",
      "vintage":null,"cork":"",
      "description":null,
      "summary":null,
      "method":"",
      "tannins":null,
      "fullness":75,
      "sweetness":17,
      "freshness":null,
      "bitterness":50,
      "color":"Lys",
      "aroma":"Humle og malt.",
      "taste":"Fyldig med avdempet bitterhet og maltpreg.",
      "storable":"Drikkeklar, ikke egnet for lagring",
      "foodPairing":[
        {"code":"A",
        "identifier":"aperitif",
        "name":"Aperitiff/avec"
        }
      ],
      "rawMaterial":"Vann, malt (bygg), humle, gjær, sirup, mais",
      "sugar":null,
      "acid":null,
      "eco":null,
      "gluten":null,
      "kosher":null,
      "fairTrade":null,
      "bioDynamic":null,
      "mainProducer":"Royal Unibrew",
      "distributor":"Skanlog As",
      "distributorId":null,
      "wholesaler":"Middelthon Engros AS",
      "categories":null,
      "storeCategory":"Uavhengig sortiment",
      "mainCategory":null,
      "mainSubCategory":null,
      "mainCountry":"Danmark",
      "district":"Øvrige",
      "subDistrict":"",
      "productSelection":"Bestillingsutvalget",
      "buyable":null,
      "deliveryTime":null,
      "nrOfUsage":null,
      "availableForPickup":null,
      "averageRating":null,
      "stock":null,
      "status":null,
      "ageLimit":null,
      "expiredDate":null,
      "purchasable":null,
      "newProduct":null,
      "apk":0.8368200836820083,
      "category":"beer",
      "points":65,
      "lowercase":"faxe extra strong beer",
      "noaccent":"Faxe Extra Strong Beer"
    }



### POST /users

Example: Create User – POST  http://it2810-09.idi.ntnu.no:3000/users

Request body:

    {
      username: 'Yoboy',
      password: 'Hunter2'
    }

### POST /auth

Example: Get authourization-token – POST  http://it2810-09.idi.ntnu.no:3000/users

Request body:

    {
      username: 'Yoboy',
      password: 'Hunter2'
    }

Response body:

  {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDIzMWE0NzY5ODRhMTlhMjE5YzI4YyIsImlhdCI6MTUxMDA5MzIyM30._6Z63zwn3DlXQEe_2LiqNWZ6PvNN0YTHeDBxW0wJ48Y'
  }


### GET /favorites

Example: http://it2810-09.idi.ntnu.no:3000/favorites

Request header:
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDIzMWE0NzY5ODRhMTlhMjE5YzI4YyIsImlhdCI6MTUxMDA5MzIyM30._6Z63zwn3DlXQEe_2LiqNWZ6PvNN0YTHeDBxW0wJ48Y"

Response body: 

  [
    products
  ]


### POST /favorites/:id

Example: POST http://it2810-09.idi.ntnu.no:3000/favorites/59fefeeb1cdfdcb911b774ca

Request header:
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDIzMWE0NzY5ODRhMTlhMjE5YzI4YyIsImlhdCI6MTUxMDA5MzIyM30._6Z63zwn3DlXQEe_2LiqNWZ6PvNN0YTHeDBxW0wJ48Y"


### DELETE /favorites/:id

Example: DELETE http://it2810-09.idi.ntnu.no:3000/favorites/59fefeeb1cdfdcb911b774ca

Request header:
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDIzMWE0NzY5ODRhMTlhMjE5YzI4YyIsImlhdCI6MTUxMDA5MzIyM30._6Z63zwn3DlXQEe_2LiqNWZ6PvNN0YTHeDBxW0wJ48Y"