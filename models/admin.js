const mongoose=require("mongoose");
const bcrypt = require("bcrypt");


const adminSchema=new mongoose.Schema({
    email:String,
    password:String
})

// fire a function before password saved to db

adminSchema.pre("save", async function (next) {
const salt = await bcrypt.genSalt();
this.password = await bcrypt.hash(this.password,salt);
next();
});


// static method to login user
adminSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};


adminModel=new mongoose.model("admin",adminSchema)
module.exports = adminModel;
