const mongoose=require("mongoose");

const carsnewSchema=new mongoose.Schema({
    image: Array,
    name:String,
    model:String,
    price:Number,
    transmission:String,
    motor:Number,
    color:String,
    year:Number,
    owner:{type:mongoose.Schema.Types.ObjectId , ref:"carsshop"}
})

carsnewModel=new mongoose.model("carsnew",carsnewSchema)
module.exports = carsnewModel;