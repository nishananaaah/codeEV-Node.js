const http = require("node:http")
//cluster module is the solution of this problem

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home page")
    }else if(req.url==="/slow-page"){ //slow-page is basically blocking the home root
        for(let i=0;i<6000000000;i++) {} //simulate CPU work //single thread node js is blocked with for loop
      res.writeHead(200,{"Content-Type":"text/plain"})
      res.end("Slow page")
    }
});

server.listen(8000,()=>{
    console.log("Server Running port number 8000")
})