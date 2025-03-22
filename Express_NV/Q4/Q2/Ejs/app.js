const express=require('express');

const app=express();
app.set('view engine','ejs');

const arr=[
    {
        "name":"tom",
        "salary":12900
    },
    {
        "name":"jerry",
        "salary":22900
    },
    {
        "name":"bob",
        "salary":32900
    }
]

app.get("/",(req,resp)=>{
    resp.render('home');
})
app.get("/about",(req,resp)=>{
    resp.render('about',{data:c});
})

app.get("/user",(req,resp)=>{
    resp.render("users",{user:arr});
})
app.listen(3000,()=>{
    console.log("running");
})