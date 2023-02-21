const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const accesShopSchema = new mongoose.Schema({
  image: String,
  id: Number,
  name: String,
  email: String,
  password: String,
  location: String,
  phone: Number,
  start_Date: Number,
  description: String,
});

// fire a function before password saved to db

accesShopSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);
  next();
});

// static method to login user
accesShopSchema.statics.login = async function (email, password) {
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

accessShopModel = new mongoose.model("accessShop", accesShopSchema);
module.exports = accessShopModel;
