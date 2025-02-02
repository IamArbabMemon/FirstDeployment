import express from 'express';

const app = express();

app.get("/greet",(req,res)=>{
    return res.json({message:"F*ck off friends"});
})

app.listen(3000,()=>{
    console.log("server is up and running");
})