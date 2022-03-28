const express=require("express");
const mongoose=require("mongoose");

const user=require("../models/user.model");

const router=express.Router();

router.get("",async(req,res)=>{
  try{
      const todo=await user.find()
      return res.status(400).send(todo)
  }
  catch{
      return res.status(400).send({message:err.message});
  }
})

module.exports=router;