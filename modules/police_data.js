const mongoose=require("mongoose")

const policedataSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    post:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    policestation:{
        type:String,
        require:true
    },
    

})


module.exports=mongoose.model("police_data",policedataSchema)