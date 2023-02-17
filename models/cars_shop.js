const mongoose=require("mongoose");
const { any } = require("webidl-conversions");

const shopSchema=new mongoose.Schema({
    image:Array,
    id:Number,
    name:String,
    password:String,
    location:String,
    phone:Number,
    start_Date:Number,
    description:String,
    email:String,
})

shopModel=new mongoose.model("carsshop",shopSchema)
module.exports = shopModel;