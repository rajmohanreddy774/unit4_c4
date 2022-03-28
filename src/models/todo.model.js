const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    title:{type:String, required:true},
},
{
    versionKey:true,
    timestamps:false
});

const todo=mongoose.model("todo",todoSchema);

module.exports=todo;
