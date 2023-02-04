API Endpoint Documentation
This API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on car details. The API uses Express.js and MongoDB to store and retrieve the data.

POST /save_Car
Request Body
The request body should include the following fields:

````yaml
{
  car_Details: {
    car_number: string,
    car_model: string,
    engine_number: string,
    color: string
  },
  owner: {
    name: string,
    addres: string,
    phone: string
  },
  missing_details: {
    place: string,
    police_station: string,
    time: number (timestamp)
  }
}
````
Response
On success, the API returns a status code of 200 and the saved car details in the following format:

````yml
{
  car: {
    car_Details: {
      car_number: string,
      car_model: string,
      engine_number: string,
      color: string
    },
    owner: {
      name: string,
      addres: string,
      phone: string
    },
    missing_details: {
      place: string,
      police_station: string,
      time: number (timestamp)
    },
    risk: string
  }
}
````
On failure, the API returns a status code of 400 and an error message in the following format:

````yml
{
  success: false,
  msg: string (error message)
}
````
GET /getcar
Request Body
The request body should include the following field:
````yml
{
  car_number: string
}
````
Response
On success, the API returns a status code of 200 and the requested car details in the following format:
````yaml
{
  success: true,
  data: {
    car_Details: {
      car_number: string,
      car_model: string,
      engine_number: string,
      color: string
    },
    owner: {
      name: string,
      addres: string,
      phone: string
    },
    missing_details: {
      place: string,
      police_station: string,
      time: number (timestamp)
    },
    risk: string
  }
}
````

On failure, the API returns a status code of 200 and an error message in the following format:

````go
{
  success: true,
  msg: string (error message)
}
````

PUT /:id
Request URL Parameter
The request URL should include the following parameter:

id: ID of the car to be updated.

Response
On success, the API returns a status code of 200 and a success message in the following format:

````yaml
{
  success: true,
  msg: "Risk updated"
}
````
On failure, the API returns a status code of 500 and an error message in the following format:
````yaml
{
  success: false,
  msg
}
````



