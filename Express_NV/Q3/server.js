const express=require('express');
const connectMongo=require('./db.js');
const router = require('./route/empRoute');

connectMongo();
const app=express();
app.use(express.json());

app.get("/test",(req,resp)=>{
    resp.end("hi");
})
app.use("/emp",router);

app.listen(2000,()=>{
    console.log("running");
})