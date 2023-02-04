const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

const detailscarSchema=new mongoose.Schema({
    car_Details:{
        car_number:{
        type:String,
        require:true,
        unique:true
    },
    car_model:{
        type:String,
        require:true,
        
    },
    engine_number:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
},


    owner:{
        name:{type:String,require:true},
        addres:{type:String,require:true},
        phone:{type:String,require:true},
    },
    missing_details:{
        car_number_:{
            type:String,
            require:true,
            unique:true
        }, 
        
        place:{type:String,required:true},
        police_station:{type:String,required:true},
        time:{ type: Date, default: Date.now }
    },
    risk:{type:String,required:true}
    

})


module.exports=mongoose.model("details_car",detailscarSchema)
