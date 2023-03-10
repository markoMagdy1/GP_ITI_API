const express=require("express");
const router=express.Router();
const accessShopModel=require("../models/accessories_shop")
router.use(express.json());
const upload=require("../middleware/multer");



router.get("/",async(req,res)=>{
    try {
        const posts=await accessShopModel.find()
        res.json(posts)
    } catch (error) {
        res.json(error)  
    }    
});

router.get("/:id",async (req,res)=>{
    try {
        const post=await accessShopModel.findById({_id:req.params.id})
        res.json(post)
    } catch (error) {
        res.json(post)
        
    }
});


          
router.post("/",upload.single('image'),async(req,res)=>{
    const {file}=req
    const newPost=await accessShopModel(
        {
            image: file.filename ,
            id:req.body.id,
            name:req.body.name,
            password:req.body.password,
            location:req.body.location,
            phone:req.body.phone,
            start_Date:req.body.start_Date,
            description:req.body.description,

        }

    );
    try {
        newPost.save();
        res.json({
            newPost,
            file:file,
            path:file.originalname
        });
    
    } catch (error) {
        res.json(error);   
    }
});

router.put("/:id",async(req,res)=>{
try {
    const updatedPost=await accessShopModel.updateOne({_id:req.params.id},req.body,)
    res.json(updatedPost);
} catch (error) {
    res.json(error);
}    

})

router.delete("/:id",async (req,res)=>{
try {
    const deletedPost=await accessShopModel.deleteOne({_id:req.params.id})
    res.json(deletedPost);
} catch (error) {
    res.json(error);
}
})
module.exports=router;
