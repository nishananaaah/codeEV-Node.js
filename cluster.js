const cluster = require("node:cluster");
const http = require ("node:http");
const OS = require("node:os");

console.log(OS.cpus().length)

if(cluster.isMaster){ //node treats this file as master and the set this master:true
    console.log(`Master process ${process.pid} is running`) // the master is in charge of creating workers
    cluster.fork();//the method is created the worker } the 1 st worker handles the first request
    cluster.fork();// the 2 worker is handles the second request
}else{
    console.log(`Worker ${process.pid} is started`)//workers are in charge of handling incoming request

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})//if we make the two request in parallel
        res.end("Home page")
    }else if(req.url==="/slow-page"){ 
        for(let i=0;i<6000000000;i++) {} 
      res.writeHead(200,{"Content-Type":"text/plain"})
      res.end("Slow page")
    }
});

server.listen(8000,()=>{
    console.log("Server Running port number 8000")
})

}