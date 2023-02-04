const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },

    car_number:{
        type:String,
        require:true,
        unique:true
    },
    place_of_missing:{
        type:String,
        require:true
    },
    car_color:{
        type:String,
        require:true
    },
    rc:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        
    }

})


module.exports=mongoose.model("User",userSchema)