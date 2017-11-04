**Get top products**
----
* **URL**

  /top/:page

  **Optional:** 

  /top/:page/?apk=desc

  /top/:page/?price=desc

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `page=[integer]`

   **Optional: **

   `apk=asc || apk=desc || price=asc || price=desc`

   default

   `apk=desc`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[product*25]`


**Get top products in category**
----
* **URL**

  /category/:category/:page

  **Optional:** 

  /category/:category/:page/?apk=desc

  /category/:category/:page/?price=desc

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `category=[string]`
   `page=[integer]`

   **Optional: **

   `apk=asc || apk=desc || price=asc || price=desc`

   default

   `apk=desc`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[product*25]`


**Get single product by code**
----
* **URL**

  /code/:code

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `category=[string]`
   `page=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `product`

**Get products by substring**
----
* **URL**

  /search/?substring=substring

  **Optional:** 

  /search/?substring=substring&apk=desc
  
  /search/?substring=substring&price=desc


* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `substring=[string]`

   **Optional: **

   `apk=asc || apk=desc || price=asc || price=desc`

   default

   `apk=desc`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `product`





**Product**

```{
  "code": "2876701",
  "name": "G. Reynolds Finissima Cava Reserva Brut",
  "productType": "Musserende vin",
  "abv": 11.5,
  "url": "https://www.vinmonopolet.no/vmpSite/Land/Spania/G-Reynolds-Finissima-Cava-Reserva-Brut/p/2876701",
  "price": 109.9,
  "pricePerLiter": 146.53,
  "images":{
    "thumbnail": "https://bilder.vinmonopolet.no/cache/95x95-0/2876701-1.jpg",
    "big": "https://bilder.vinmonopolet.no/cache/300x300-0/2876701-1.jpg"
  },
  "barcode": null,
  "containerSize": 0.75,
  "containerType": "Glass",
  "vintage": 2013,
  "cork": "",
  "description": null,
  "summary": null,
  "method": "Tradisjonell metode. Sekundær fermentering på flaske.",
  "tannins": null,
  "fullness": 50,
  "sweetness": 17,
  "freshness": 58,
  "bitterness": null,
  "color": "Svak lys gul",
  "aroma": "Duft av epler og tropiske frukter.",
  "taste": "Rik med lang ettersmak.",
  "storable": "Drikkeklar, ikke egnet for lagring",
  "foodPairing": [
    {
      "code": "A",
      "identifier": "aperitif",
      "name": "Aperitiff/avec"
    },
    {
      "code": "B",
      "identifier": "shellfish",
      "name": "Skalldyr"
    }
  ],
  "rawMaterial": "Macabeo 100%",
  "sugar": 8,
  "acid": 5.8,
  "eco": null,
  "gluten": null,
  "kosher": null,
  "fairTrade": null,
  "bioDynamic": null,
  "mainProducer": "G. Reynolds",
  "distributor": "Vectura AS",
  "distributorId": null,
  "wholesaler": "Optimum Wines AS",
  "categories": null,
  "storeCategory": "Uavhengig sortiment",
  "mainCategory": null,
  "mainSubCategory": null,
  "mainCountry": "Spania",
  "district": "Øvrige",
  "subDistrict": "",
  "productSelection": "Bestillingsutvalget",
  "buyable": null,
  "deliveryTime": null,
  "nrOfUsage": null,
  "availableForPickup": null,
  "averageRating": null,
  "stock": null,
  "status": null,
  "ageLimit": null,
  "expiredDate": null,
  "purchasable": null,
  "newProduct": null,
  "apk": 0.7848043676069155,
  "points": 61
}```
 