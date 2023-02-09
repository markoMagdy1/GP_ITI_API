const express=require("express");
const router=express.Router();
const shopModel=require("../models/cars_shop")
router.use(express.json());

function checkError(err, response){
    if(!err) return res.json(response);
        res.json(err)
}

router.get("/",async(req,res)=>{
    try {
        const posts=await shopModel.find()
        res.json(posts)
    } catch (error) {
        res.json(error)  
    }    
});

router.get("/:id",async (req,res)=>{
    try {
        const post=await shopModel.findById({_id:req.params.id})
        res.json(post)
    } catch (error) {
        res.json(post)
        
    }
});

router.post("/",async(req,res)=>{
    const newPost=await shopModel(req.body);
    try {
        newPost.save();
        res.json(newPost);
    } catch (error) {
        res.json(error);   
    }
});

router.put("/:id",async(req,res)=>{
try {
    const updatedPost=await shopModel.updateOne({_id:req.params.id},req.body,)
    res.json(updatedPost);
} catch (error) {
    res.json(error);
}    

})

router.delete("/:id",async (req,res)=>{
try {
    const deletedPost=await shopModel.deleteOne({_id:req.params.id})
    res.json(deletedPost);
} catch (error) {
    res.json(error);
}
})
module.exports=router;
