const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.end("hello")
})

server.listen(2000,()=>{
    console.log("connected");
})