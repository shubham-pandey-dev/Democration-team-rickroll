# Democrathon - Team RickRoll

## Demo Video
 - [Video]()

## Source
 - In collaboration with team Soochee for ONDC hackathon with added features.
 
### Services
 - Frontend - [README.md](/frontend/README.md)
 - Backend - [README.md](/backend/README.md)
 - VoiceToText - [README.md](/voiceToTextService/README.md)
 - ImageScanner - [README.md](imageScanner/README.md)

### Schema

#### Store
 - id
 - name
 - contactNumberList
 - location
 - catalog

#### Master Catalogue Item
 - id
 - barcode
 - sku
 - weight
 - unit
 - mrp
 - image128
 - image256
 - parentCategory
 - subCategory
 - additionalInfo

#### Master Added Store catalog Item
 - id
 - masterId
 - price
 - quantity

#### Manual Added Store Catalogue Item
 - id
 - barcode
 - sku
 - weight
 - unit
 - mrp
 - image128
 - image256
 - parentCategory
 - subCategory
 - additionalInfo
 - price
 - quantity
