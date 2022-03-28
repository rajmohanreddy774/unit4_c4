const express=require("express");
const router=express.Router();

const authorise=require("../middlewares/autherize");


const todo=require("../models/todo.model");

router.post("",autherise,async(req,res)=>{
    req.body.user_id=req.user_id;
    try{
        const todo=await todo.create(req.body)
        return res.status(400).send(todo)
    }
    catch(error)
    {
        return res.statuss(401).send({message:error.message})
    }
})


router.post("/", autherise,async(req,res)=>{
    req.body.email=req.email;
    try{
        const todo=await todo.create(req.body)
        return res.status(400).send(todo)
    }
    catch(error)
    {
        return res.status(401).send({message:error.message})
    }
})

router.patch("/:id", autherise,async(req,res)=>{
    try {
       const user= await post.findByIdAndUpdate(req.params.id,req.body,{new:true})
       return res.status(400).send(user) 
    } catch (error) {
        console.log(error);
        return res.status(401).send("error",error);
        
    }
})

router.delete("/:id",autherise, async(req,res)=>{
    try {
       const user= await post.findByIdAndDelete(req.params.id)
       return res.status(400).send(user) 
    } catch (error) {
        console.log(error);
        return res.status(401).send("error",error);
        
    }
})

module.exports=router;