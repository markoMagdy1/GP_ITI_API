const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
    username:String,
    password:String,
})

adminModel=new mongoose.model("admin",adminSchema)
module.exports = adminModel;