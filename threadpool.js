const fs =require("node:fs");
console.log("first");
fs.readFile("./file2.txt","utf-8",(err,data)=>{
  console.log("file contents")
});
console.log("last")