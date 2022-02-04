# Speech to Text Service
This service converts audio to text

## Architecture Diagram
![Architecture Diagram](architecture-diagram-Page-3.jpg)

## Exposed endpoints
```
URL: http://localhost:6000/voice-to-text
Method: POST
FormData:
  - file: wav format file input
```
## Input
audio file in `wav` format with label `file`

## output
json with text converted from audio
```json
{
  "text": "audio conversion."
}
```

## How to run

### prerequisites
#### docker
Please make sure you have docker installed and running in your machine. For complete installation instructions visit
```http request
https://docs.docker.com/get-docker/
```

### command to run
before running below command switch to `voiceToTextService` directory
```commandline
docker compose up
```
above command will spin up the docker container and voice to text service will be up and running.

Made by team **RickRoll**
