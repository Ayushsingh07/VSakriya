Endpoint Documentation for Car Missing Report Application
This is the endpoint documentation for Car Missing Report Application.

Register User
Endpoint
/register


````json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "car_number": "string",
  "place_of_missing": "string",
  "car_color": "string",
  "rc":"string"
}
````
Response
On success (200), the following response will be sent:
````json
{
  "_id": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "car_number": "string",
  "place_of_missing": "string",
  "car_color": "string",
  "rc":"string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "__v": 0
}
````
On failure (500), the following response will be sent:
````json
{
  "error": "string"
}
````
Login
GET /login
Request
No request body is required for this endpoint

Response
On success (200), the following response will be sent:

````json
{
  "message": "OTP sent to registered mobile number",
  "otp": "integer"
}
````
On failure (500), the following response will be sent:

````json

{
  "error": "string"
}
````
Verify OTP
POST /verify-otp
Request

````json
{
  "otp": "integer"
}
````
Response
On success (200), the following response will be sent:

````json
{
  "msg": "correct OTP"
}
````
On wrong OTP (401), the following response will be sent:


````json
{
  "msg": "Wrong OTP"
}
````

On failure (500), the following response will be sent:
````json
{
  "error": "string"
}
````


