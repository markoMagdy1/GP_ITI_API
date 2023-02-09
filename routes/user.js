const express=require("express");
const router=express.Router();
const userModdel=require("../models/user")
router.use(express.json());



router.get("/",async (req,res)=>{
    try {
        const users= await userModdel.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});

router.get("/:id" ,async (req,res)=>{
    try {
        const user= await userModdel.findById({_id:req.params.id});
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});

router.post("/",async (req,res)=>{
    const newUser=userModdel(req.body);
try {
    newUser.save()
    res.json({sucsseful_inserted:newUser})
} catch (error) {
    res.json(error); 
}
    
});

router.put("/:id",async (req,res)=>{
    try {
        const updatedUser=await userModdel.updateOne({_id:req.params.id},req.body)
        res.send("changes saved ...");
    } catch (error) {
        res.json(error);
    }
    })

router.delete("/:id",async (req,res)=>{
    try {
        const deletedUser=await userModdel.deleteOne({_id:req.params.id})
        res.json(deletedUser);
    } catch (error) {
        res.json(error)
    }
})



module.exports=router;
