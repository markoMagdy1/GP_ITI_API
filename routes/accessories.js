const express=require("express");
const router=express.Router();
const accessModel=require("../models/accessories")
router.use(express.json());
const upload=require("../middleware/multer");

function checkError(err, response){
    if(!err) return res.json(response);
        res.json(err)
}

router.get("/",async(req,res)=>{
    try {
        const posts=await accessModel.find().populate("owner")
        res.json(posts)
    } catch (error) {
        res.json(error)  
    }    
});

router.get("/:id",async (req,res)=>{
    try {
        const post=await accessModel.findById({_id:req.params.id}).populate("owner")
        res.json(post)
    } catch (error) {
        res.json(post)
        
    }
});
router.post("/", upload.array("image",12), async (req, res) => {
    const { files } = req;
    const  images = files.map(e => 
      e.filename 
    );
    const newPost = await accessModel({
      image: images,
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      color: req.body.color,
      desc: req.body.desc,
      isExternal:req.body.isExternal,
      owner:req.body.owner
    });
    try {
      newPost.save();
      res.json({
        newPost,
        files: files,
        path: files.originalname,
      });
    } catch (error) {
      res.json(error);
    }
  });


router.put("/:id",async(req,res)=>{
try {
    const updatedPost=await accessModel.updateOne({_id:req.params.id},req.body,)
    res.json(updatedPost);
} catch (error) {
    res.json(error);
}    

})

router.delete("/:id",async (req,res)=>{
try {
    const deletedPost=await accessModel.deleteOne({_id:req.params.id})
    res.json(deletedPost);
} catch (error) {
    res.json(error);
}
})
module.exports=router;
