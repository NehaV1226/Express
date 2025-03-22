const express=require('express');
const app=express();

app.get("/",(req,resp)=>{
    resp.sendFile('./views/home.html',{root:__dirname});
})
app.get("/about",(req,resp)=>{
    resp.sendFile('./views/about.html',{root:__dirname});
})
app.listen(2000,()=>{
    console.log("running...");
})