const http = require("node:http");
const {Worker} = require("node:worker_threads")
//worker thread module 
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home page")
    }else if(req.url==="/slow-page"){ //the slow-page didnt block the home page request
        const worker = new Worker("./worker-thread.js")//give path the worker file as argument
        worker.on("message",(j)=>{
            res.writeHead(200,{"Content-Type":"text/plain"})
      res.end(`Slow page ${j}`)

        })
      }
});

server.listen(8000,()=>{
    console.log("Server Running port number 8000")
})