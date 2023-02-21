const mongoose=require("mongoose");
const { any } = require("webidl-conversions");
const bcrypt = require("bcrypt");



const carshopsSchema=new mongoose.Schema({
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


// fire a function before password saved to db

carshopsSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
carshopsSchema.statics.login = async function (email, password) {
  const accesShop = await this.findOne({ email });
  if (accesShop) {
    const auth = await bcrypt.compare(password, accesShop.password);
    if (auth) {
      return accesShop;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

shopModel = new mongoose.model("carsshop", carshopsSchema);
module.exports = shopModel;