# RickRoll Store Frontend

- Frontend application to build quick catalog for seller

## `Architecture Diagram`
![Architecture Diagram](docs/images/architecture-diagram-FrontEnd.jpg)

### `Requirements`
- NodeJs - v14.17.6 version
- yarn - 1.22.11 version

### `Installation`
- git clone `git@github.com:Open-network-for-digital-commerce/innovation-hackathon-jan22.git`
- cd innovation-hackathon-jan22/frontend
- yarn install
- touch .env
- Add following variables in `.env` file
    - REACT_APP_VOICE_TO_TEXT_APP_URL = http://localhost:7000
    - REACT_APP_BACKEND_APP_URL = http://localhost:8080

### `Dependent Services`
 - VoiceToText
 - Backend

### `Run application`
- Run Command `yarn start`

### `Reuseable UI components`
#### `AudioScanner` 
This is React UI component which can record user voice and convert it to text using our `VoiceToText` api Service
##### Usage
```
import AudioScanner from './components/AudioScanner'; 

<AudioScanner handleChange={(value) => console.log(value)} />
```
##### Properities
   - handleChange - A function callback to get the text after converstion

#### `BarcodeScanner` 
This is React UI component which can record barcode from webcamera and return the barcode as text
##### Usage
```
import BarcodeScanner from './components/BarcodeScanner'; 

<BarcodeScanner handleChange={(value) => console.log(value)} />
```
##### Properities
   - handleChange - A function callback to get the text after converstion


