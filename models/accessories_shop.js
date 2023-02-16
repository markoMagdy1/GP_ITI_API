const mongoose=require("mongoose");

const accesShopSchema=new mongoose.Schema({
    image:String,
    id:Number,
    name:String,
    password:String,
    location:String,
    phone:Number,
    start_Date:Number,
    description:String,
})

accessShopModel=new mongoose.model("accessShop",accesShopSchema)
module.exports = accessShopModel;