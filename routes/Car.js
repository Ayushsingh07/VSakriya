const router = require("express").Router();
const { Timestamp } = require("mongodb");
const car_details = require("../modules/car_details");
const dotenv=require("dotenv")
const recoverd_car=require('../modules/recoverd_car')
dotenv.config()



require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;



router.post("/save_Car", async (req, res) => {
    
  const risk="low"
  const newcar = car_details({
    car_Details: {
      car_number: req.body.car_Details.car_number,
      car_model: req.body.car_Details.car_model,
      engine_number: req.body.car_Details.engine_number,
      color: req.body.car_Details.color,
    },
    owner: {  
      name: req.body.owner.name,
      addres: req.body.owner.addres,
      phone: req.body.owner.phone,
    },
    missing_details: {
      car_number_: req.body.missing_details.car_number_,
      place: req.body.missing_details.place,
      police_station:req.body.missing_details.police_station,
      
    },
    risk:risk
  });

  try {
    const savedcar = await newcar.save();
    res.status(200).send({ car: savedcar });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

//get car
router.get("/getcar", async (req, res) => {
  const filter = { car_number: req.body.car_number };

  const cursor = await car_details.findOne(filter);

  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});
//getallcar
router.post("/getcars", async (req, res) => {
  const filter = { police_station: req.body.police_station_id };
  const cursor = await car_details.find(filter, { "missing_details": 1 });
  
  if (cursor) {
  res.status(200).send({ success: true, data: cursor });
  } else {
  res.status(200).send({ success: true, msg: "No Data Found" });
  }
  });

//update




router.post("/found_car", async (req, res) => {
  const filter = { car_number: req.body.car_number };
  const cursor = await user_data.findOne(filter);
  if (!cursor) {
    return res.status(404).send({
      success: false,
      message: "Car not found",
    });
  }


const userToken = cursor.user_token;
const notification = {
    title: "Your car has been found!",
    body: "We have found your missing car. Please contact the police station for more information.",
  };
  var admin = require("firebase-admin");
var serviceAccount = require("../service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smart-interceptor-d670e-default-rtdb.firebaseio.com/"
});

var topic = 'general';

var message = {
  notification: {
    title: 'Your car has been found!',
    body: 'We have found your missing car. Please contact the police station for more information.'
  },
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
});
});


//delte
router.delete("/delete/:id", async (req, res) => {
  try {
    const car = await car_details.findById(req.params.id);
    if (!car) return res.status(404).send({ success: false, msg: "CAR not found" });

    if (car.car_Details.car_number !== req.body.car_number) {
      return res.status(401).send({ success: false, msg: "Unauthorized to delete" });
    }

    const recovered_car = new recoverd_car({
      car_Details: {
        car_number: car.car_Details.car_number,
        car_model: car.car_Details.car_model,
        engine_number: car.car_Details.engine_number,
        color: car.car_Details.color,
      },
      owner: {
        name: car.owner.name,
        address: car.owner.address,
        phone: car.owner.phone,
      },
      missing_details: {
        car_number_:car.missing_details.car_number_ ||'',
        place: car.missing_details.place || '',
        police_station: car.missing_details.police_station ||'',
        time: car.missing_details.time,
      },
    });

    try {
      await recovered_car.save();
    } catch (error) {
      return res.status(400).send({ success: false, msg: error.message });
    }

    await car.delete();
    res.status(200).send({ success: true, msg: "CAR deleted and saved in recovered_cars" });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
});



module.exports = router;
