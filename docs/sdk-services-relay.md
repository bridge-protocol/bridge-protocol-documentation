---
id: sdk-services-relay
title: Request Relay
sidebar_label: Request Relay 
---
Service to facilitate relaying encrypted payloads between applications and devices for synchronization and challenge / request.  Requests and responses are routed using the Bridge Network via temporary encrypted payloads.

## Functions
### createRequest()
Create a request
```
async createRequest(type, request)
```
- **type** (int) - the request type
- **request** (string) - encrypted request payload

---

### getRequest()
Get an existing request
```
async getRequest(id)
```
- **id** (string) - the request identifier to retrieve

---

### createResponse()
Create a request relay response
```
async createResponse(id, response)
```
- **id** (string) - the request identifier scope to send the response for
- **request** (string) - encrypted response payload

---

### getResponse()
Get a request relay response
```
async getResponse(id)
```
- **id** (string) - the request identifier to get ther response for

