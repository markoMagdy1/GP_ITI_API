const express=require("express");
const mongoose=require("mongoose");
const morgan=require("morgan");
const PORT =5000;
const app=express(); 
app.use('/',express.static('images'))

const usersRouter=require("./routes/user");
const adminRouter=require("./routes/admin");
const carsShopRouter=require("./routes/cars_shop");
const carsnewRouter=require("./routes/carsnew");
const carsusedRouter=require("./routes/carsused");
const schoolsRouter=require("./routes/schools");
const maintainRouter=require("./routes/maintain");
const accessShopRouter=require("./routes/accessories_shop");
const accessRouter=require("./routes/accessories");


app.use("/users",usersRouter)
app.use("/admins",adminRouter);
app.use("/carsshops",carsShopRouter);
app.use("/newcars",carsnewRouter);
app.use("/usedcars",carsusedRouter);
app.use("/schools",schoolsRouter);
app.use("/maintains",maintainRouter);
app.use("/accessShops",accessShopRouter);
app.use("/accessories",accessRouter);



mongoose.connect("mongodb://127.0.0.1:27017/gpproject",(err)=>{
    if(!err) return console.log("DB Connected");
    console.log(err);
})


app.listen(PORT,(err)=>{
    if(!err) return console.log((`server started at port ${PORT}`))
    console.log(err)
})