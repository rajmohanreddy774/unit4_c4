const express= require("express");
const connect=require("./src/configs/db");
const userController=require("./src/controllers/user.controller");

const todoController=require("./src/controllers/todo.controller");

const {register,login,generateToken}=require("./src/controllers/aouth.controller");
app.use(express.json());

app.use("/users",userController);
app.use("/login",login)

app.use("/todo",todoController);
app.use("/regiter",register);



app.listen(5000, async()=>{
    try {
        await connect();
        console.log("listening to port 5000");
    } catch (error) {
        console.log(error);

    }
});
