# Base64 as a microservice
An OMG service to encode/decode Base64 content.

[![Open Microservice Guide](https://img.shields.io/badge/OMG-enabled-brightgreen.svg?style=for-the-badge)](https://microservice.guide)

This microservice's goal is to encode/decode Base64 content.

## [OMG](hhttps://microservice.guide) CLI

### OMG

* omg validate
```
omg validate
```
* omg build
```
omg build
```
### Test Service

* If provide content for decode service will return base64 string as output and If base64 content are provide for decode service will return the decoded string.

### CLI
#### Encode
```sh
$ omg run encode -a content=<CONTENT_FOR_ENCODE>
```
#### Decode
```sh
$ omg run decode -a content=<CONTENT_FOR_DECODE>
```

## License
### [MIT](https://choosealicense.com/licenses/mit/)

## Docker
### Build
```
docker build --rm -f "Dockerfile" -t base64:latest .
```
### RUN
```
docker run -p 5000:5000 base64:latest
```