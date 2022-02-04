# RickRoll API (For ONDC Digital Catalog)

This service provides endpoints for creating a seller store and it's catalog.
It also provides access to a common master database which can be used by any seller
to fasten creating their own catalog.

![ONDC Backend](https://user-images.githubusercontent.com/27000128/148685062-8cf26e4f-c168-4391-88be-3b9fe9f56a36.png)

### `Requirements`
- JRE - 11 version
- JDK - 11 version
- Maven - 4.0.0

### `Installation`
- git clone `git@github.com:Open-network-for-digital-commerce/innovation-hackathon-jan22.git`
- cd innovation-hackathon-jan22 
- git checkout team-soochee
- cd backend
- mvn clean install

### `Run application`
- Run Command `mvn spring-boot:run`

## APIs:
### Store:
- `/store/create`
```
METHOD: POST
Payload:
{
	"name" : "Store",
	"contactNumberList" : ["9876543210"],
	"location" : {
		"address" : {
			"addressLine1" : "xy",
			"addressLine2" : "zz",
			"landmark" : "nearxy",
			"city" : "blr",
			"state" : "KA",
			"postalcode" : "111111"
		},
		"gpsCoordinates" : {
			"longitude" : "11.0",
			"latitude" : "22.00"
		}
	}
}
RequiredFields: [name, contactNumberList]
Response: store_id
```
- `/store/get/?id={store_id}`
```
METHOD: GET
Response:
{
	"name" : "Store",
	"contactNumberList" : ["9876543210"],
	"location" : {
		"address" : {
			"addressLine1" : "xy",
			"addressLine2" : "zz",
			"landmark" : "nearxy",
			"city" : "blr",
			"state" : "KA",
			"postalcode" : "111111"
		},
		"gpsCoordinates" : {
			"longitude" : "11.0",
			"latitude" : "22.00"
		}
	}
}
```

### Master Catalog
- `/catalog/master/search?query=<searchText>`
```
METHOD: GET
params: query
Response:
    [{
        "id": "facd6de2-2b5c-469e-98df-e6eed83135e0",
        "barcode": "8908007946456",
        "sku": "Smoodies Aam Ka Panna: Sugar-Free",
        "weight": "1",
        "unit": "ltr",
        "mrp": "200.00",
        "image128": "https://media.goodbox.in/qo/mrp/Distributors/Smoothies/8908007946456.png",
        "image256": "https://media.goodbox.in/qo/mrp/Distributors/Smoothies/8908007946456.png.png",
        "parentCategory": "Fruit Juice & Drinks",
        "subCategory": "Beverages",
        "additionalInfo": null
    }]
```


### Seller Catalog

- `/catalog/products/add`
```
METHOD: POST
Headers: {
    'id': 'store_id'
}
Response:
200 OK
```

- `/catalog/products/addCustomProduct`
```
METHOD: POST
Headers: {
    'id': 'store_id'
}
Request:
{
	"price" : "100",
	"quantity" : "2",
	"sku" : "Milk",
	"weight" : "1",
	"unit" : "liter",
	"mrp" : "200",
	"image128" : "NA",
	"image256" : "NA",
	"parentCategory" : "XYZ",
	"subCategory" : "YXZ"
}
Response:
200 OK
```

- `/catalog/products/get`
```
METHOD: GET
Headers: {
    'id': 'store_id'
}
Response:
[
    {
        "id": "e781d6c3-baa7-4e84-9c32-87be5845e50c",
        "price": 100,
        "quantity": 2,
        "sku": "Milk",
        "weight": "1",
        "unit": "liter",
        "mrp": "200",
        "image128": "NA",
        "image256": "NA",
        "parentCategory": "XYZ",
        "subCategory": "YXZ"
    }
]
```

- `/catalog/products/update`
```
METHOD: PUT
Headers: {
    'id': 'store_id'
}
Request:
{
	"price" : "0",
	"quantity" : "0",
	"masterId" : "facd6de2-2b5c-469e-98df-e6eed83135e0"
}
Response:
200 OK
```

- `/catalog/products/delete`
```
METHOD: DELETE
Headers: {
    'id': 'store_id'
}
Request:
{
	"masterId" : "facd6de2-2b5c-469e-98df-e6eed83135e0"
}
Response:
200 OK
```
