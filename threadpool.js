// const fs =require("node:fs");
// console.log("first");
// fs.readFile("./file2.txt","utf-8",(err,data)=>{//asynchronous and nonblocking
//   console.log("file contents")
// });
// console.log("last")
const cryptpo = require("node:crypto");
//synchrous
// cryptpo.pbkdf2 //password base key derivation function 2 = to hash password before storing them
//measuring the time of code executing in synchronus
// const start =Date.now();
// cryptpo.pbkdf2Sync("password","salt",100000,512,"sha512");
// cryptpo.pbkdf2Sync("password","salt",100000,512,"sha512");//indicating synchronus and blocking
// console.log("Hash:",Date.now()-start);
//asynchronus
const MAX_CALLS =3;
const start = Date.now();
for(let i=0;i<MAX_CALLS;i++){
    cryptpo.pbkdf2("password","salt",100000,512,"sha512",()=>{//runs in a seperate thread
        console.log(`Hash:${i+1}`,Date.now()-start)
    })
}