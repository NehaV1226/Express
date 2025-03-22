const express=require('express');

const app=express();
app.get("/",(req,resp)=>{
    resp.end("Hello the get request is called.")
})

app.post("/addData",(req,resp)=>{
    resp.end("Added");
})

app.delete("/deleteData",(req,resp)=>{
    resp.end("deleted");
})

app.listen(2000,()=>{
    console.log("running...")
})