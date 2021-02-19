const express = require("express");
const router = express.Router();
const BookRouter = require("./infoschema/infoschema");

router.post("/",async(req,res)=>{
    console.log(req.body);
     data = new BookRouter({
        Bookname:req.body.Bookname,
        Page:req.body.Page,
        Author:req.body.Author
    });
    await data.save();
    res.json(data);

})
router.get("/",async (req,res)=>{
    var findData = await BookRouter.find();
    res.json(findData);
})   
router.put("/update",async(req,res)=>{
    var update = await BookRouter.updateOne({id:req.body._id},{$set:{ 
        
        Bookname:req.body.Bookname,
        Page:req.body.Page,
         Author:req.body.Author

    }});
    res.json(update);
})

router.get("/",(req,res)=>{
    res.json("I am From router file");

})
module.exports= router;