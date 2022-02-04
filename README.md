# Democrathon - Team RickRoll

## Demo Video
 - [Team Soochee Video](https://drive.google.com/file/d/1cY25cpOymtANuhM6Pp4YQY9__uX78iNf/view)
 - [Team RickRoll Video](https://drive.google.com/file/d/1sTdBcydx9VfceMYx4ZGzyWTyuOTL5MPR/view?usp=sharing)

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
