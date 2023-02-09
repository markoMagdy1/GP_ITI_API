const express=require("express");
const router=express.Router();
const carsUsedModel=require("../models/carsused")
router.use(express.json());

router.get("/",async(req,res)=>{
    try {
        const posts=await carsUsedModel.find().populate("owner")
        res.json(posts)
    } catch (error) {
        res.json(error)  
    }    
});

router.get("/:id",async (req,res)=>{
    try {
        const post=await carsUsedModel.findById({_id:req.params.id}).populate("owner")
        res.json(post)
    } catch (error) {
        res.json(post)
        
    }
});

router.post("/",async(req,res)=>{
    const newPost=await carsUsedModel(req.body);
    try {
        newPost.save();
        res.json(newPost);
    } catch (error) {
        res.json(error);   
    }
});

router.put("/:id",async(req,res)=>{
try {
    const updatedPost=await carsUsedModel.updateOne({_id:req.params.id},req.body,)
    res.json(updatedPost);
} catch (error) {
    res.json(error);
}    

})

router.delete("/:id",async (req,res)=>{
try {
    const deletedPost=await carsUsedModel.deleteOne({_id:req.params.id})
    res.json(deletedPost);
} catch (error) {
    res.json(error);
}
})
module.exports=router;