API Documentation
Car Details
POST /police_officer
Request Body
````json
{
  "name": "string",
  "post": "string",
  "number": "string",
  "id": "string",
  "age": "number",
  "policestation": "string"
}
````
Response Body
````json
{
  "police": {
    "id": "string",
    "name": "string",
    "post": "string",
    "number": "string",
    "age": "number",
    "policestation": "string",
    "created_at": "timestamp"
  }
}
````
GET /get_police
Request Body
````json
{
  "id": "string"
}
````
Response Body
````json
{
  "id": "string",
  "name": "string",
  "post": "string",
  "number": "string",
  "age": "number",
  "policestation": "string",
  "created_at": "timestamp"
}
````
Found Car
POST /found_car
Request Body`

````json
{
  "car_number": "string"
}
````
Response Body
````json

{
  "success": true,
  "message": "Your car has been found!"
}
````
POST /found_car_msg
Request Body
````json
{
  "car_number": "string"
}
````
Response Body
````json
{
  "success": true,
  "data": {
    "car_number": "string",
    "place_of_missing": "string",
    "user_token": "string",
    "created_at": "timestamp"
  }
}
````


