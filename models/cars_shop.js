const mongoose=require("mongoose");

const shopSchema=new mongoose.Schema({
    id:Number,
    name:String,
    password:String,
    location:String,
    phone:Number,
    start_Date:Number,
    description:String,
})

shopModel=new mongoose.model("carsshop",shopSchema)
module.exports = shopModel;