// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userroute = require("./routes/auth");
const policeroute = require("./routes/Police");
const carroute = require("./routes/Car");
const cors=require('cors')

app.use(cors()) 
// configurations
app.use(express.json());
dotenv.config();

// constants
const PORT = process.env.PORT || 3000;

// database connection
mongoose.set("strictQuery", false);
mongoose
    .connect(
        "mongodb+srv://nqu7069:passtest@cluster0.ap8yjvp.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DATABASE : CONNECTED"))
    .catch((err) => {
        console.log(err);
    });

// routes
app.get("/", (req, res) => {
    res.json({server: "running"}).status(200).end();
});
app.use("/police", policeroute);
app.use("/car", carroute);
app.use("/user", userroute);

// plug
app.listen(PORT, () => {
    console.log(`PORT : ${PORT}\nLINK : http://localhost:${PORT}`);
});