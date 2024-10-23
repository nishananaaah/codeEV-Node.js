const http = require("node:http");
const fs=require("node:fs");
// const server = http.createServer((req, res) => {//callback fun
// const name = "Nishana" //html template
// res.writeHead(200,{"Content-Type":"text/html"})//request argument consist the information about the incoming request//2nd argument is the server response 
//   // fs.createReadStream("./index.html").pipe(res);
// //   res.end(JSON.stringify(superHero));//json response
//  // res.writeHead(200, { "Content-Type": "application/json" });

// let html =fs.readFileSync("./index.html","utf-8")
// html =html.replace("{{name}}",name)
// res.end(html);//HTML response
// });
// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

//http Routing//
const server =http.createServer((req,res)=>{
  //req.method GET POST PUT DELETE 
  if(req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Home page")
  }else if(req.url==="/about"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("About page")
  }else if(req.url==="/api"){
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({
      firstName:"Nishana",
      lastName:"Fathima"
    }))
  }else{
    res.writeHead(404)
    res.end("Page NOT found")
  }
})
server.listen(3000,()=>{
  console.log("Server Running the port number 3000")
})