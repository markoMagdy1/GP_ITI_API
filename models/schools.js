const mongoose=require("mongoose");

const schoolsSchema=new mongoose.Schema({
    id:Number,
    name:String,
    location:String,
    phone:Number,
    price:Number,
})

schoolsModel=new mongoose.model("schools",schoolsSchema)
module.exports = schoolsModel;