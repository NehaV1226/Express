const express= require('express');
const app=express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/data",(req,resp)=>{
    const data=req.body;
    resp.json(data)
})

app.get("/",(req,resp)=>{
    resp.sendFile("./views/form.html",{root:__dirname});
})

app.listen(2000,()=>{
    console.log("running");
})