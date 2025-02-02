import express from 'express';

const app = express();

app.get("/greet",(req,res)=>{
    return res.json({message:"Good night"});
})

app.listen(3000,()=>{
    console.log("server is up and running");
})