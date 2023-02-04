const router = require("express").Router();
const User = require("../modules/user");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();








//otp
const twilio = require("twilio");
const accountSid = "AC42adc57b1e7641bfa5209041f877ce96";
const authToken = "0da405f27687c49d996e64b077d4d95d";
const client = new twilio(accountSid, authToken);










//register
router.get("/test", (req, res) => {
  res.send("hello test");
});

router.post("/register", async (req, res) => {
  const newuser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, "bablu").toString(),
    car_number: req.body.car_number,
    place_of_missing: req.body.place_of_missing,
    car_color: req.body.car_color,
    rc:req.body.rc
  });
  try {
    const savedUser = await newuser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

var otpmain="0000";

router.get("/login", async (req, res) => {
  try {
  const otp = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  otpmain=otp;
  console.log("login",otpmain);
   client.messages
      .create({
        body: `your otp- ${otp}`,
        messagingServiceSid:'MG6f04e97fa56183439dd0d3ecbbb5e9ef',
        to:'+916392855172'
      })
      .then(() => {
        res.status(200).json({
          message: "OTP sent to registered mobile number",
          otp: otp
        });
      })
      .catch(err => res.status(500).json({ error: err }));
  } catch (err) {
    res.status(500).json({ error: err });

  }
  
}
);


router.post("/verify-otp", async (req, res) => {
  try {
    console.log("otp is",otpmain)
    console.log("response otp ",req.body.otp)
    if (otpmain != req.body.otp) return res.status(401).json({"msg":"Wrong OTP"});
    res.status(200).json({"msg":"correct OTP"});
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
