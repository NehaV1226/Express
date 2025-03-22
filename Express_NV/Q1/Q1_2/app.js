const express =require('express');
const app=express();
app.use(express.json())

app.post("/data",(req,resp)=>{
    const data=req.body;
    console.log(data);
    resp.json(data)
})

app.listen(2000,()=>{
    console.log("running")
})