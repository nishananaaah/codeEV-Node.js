// const fs =require("node:fs");
// console.log("first");
// fs.readFile("./file2.txt","utf-8",(err,data)=>{//asynchronous and nonblocking
//   console.log("file contents")
// });
// console.log("last")
// const cryptpo = require("node:crypto");
//synchrous
// cryptpo.pbkdf2 //password base key derivation function 2 = to hash password before storing them
//measuring the time of code executing in synchronus
// const start =Date.now();
// cryptpo.pbkdf2Sync("password","salt",100000,512,"sha512");
// cryptpo.pbkdf2Sync("password","salt",100000,512,"sha512");//indicating synchronus and blocking
// console.log("Hash:",Date.now()-start);
//asynchronus
// process.env.UV_THREADPOOL_SIZE =16;//8 cpu cores
// const MAX_CALLS =16;
// const start = Date.now();
// for(let i=0;i<MAX_CALLS;i++){
//     cryptpo.pbkdf2("password","salt",100000,512,"sha512",()=>{//runs in a seperate thread
//         console.log(`Hash:${i+1}`,Date.now()-start)//Libuv thread pool has 4 threads
//     })
// }

//Network I/O
const https =require("node:https");

const MAX_CALLS =12;
const start =Date.now();
for(let i=0; i < MAX_CALLS; i++){
https
.request("https://www.google.com",(res)=>{
    res.on("data",()=>{});
    res.on("end",()=>{
        console.log(`Request:${i+1}`,Date.now()-start);
    })
  })
  .end();
}
