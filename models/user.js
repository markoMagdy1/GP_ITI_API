const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    image:String,
    fname:String,
    lname:String,
    phone:Number,
    email:String
})

const userModel=mongoose.model("User",userSchema);
module.exports=userModel;