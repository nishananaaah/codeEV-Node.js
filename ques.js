const fs =require("fs");
// fs.readFile(__filename,()=>{
//     console.log("this is readfile 1")//THIRD
// });
// process.nextTick(()=>console.log("this is the process.nexttick 1"));//FIRST
// Promise.resolve().then(()=>console.log("this is the promise.resolve 1"))//SECOND

// setTimeout(()=>console.log("this is setTimeout 1"),0);
// fs.readFile(__filename,()=>{
//     console.log("this is readfile 1")
// });
 //three q combination
//  fs.readFile(__filename,()=>{
//     console.log("this is the readfile 1")//I/Q queue 5
//  });
//  process.nextTick(()=>console.log("this is process,nexttick 1"));//Microtask queue 1
//  Promise.resolve().then(()=>console.log("this is the promise queue"))//Promise queue 2
//  setTimeout(()=>console.log("this is settimeout 1"),0)//setTimeout queue 3
//  setImmediate(()=>console.log("this is setImmediate 1"))//check queue 4

 //Check queue
//  fs.readFile(__filename,()=>{
//     console.log("this is the readfile 1")//
//     setImmediate(()=>console.log("this is setImmediate inner the readfile 1"))
//  });
//  process.nextTick(()=>console.log("this is process,nexttick 1"));//
//  Promise.resolve().then(()=>console.log("this is the promise queue"))//
//  setTimeout(()=>console.log("this is settimeout 1"),0)//
  

// setImmediate(()=>console.log("this is setImmediate 1"));
// setImmediate(()=>{
//     console.log("this is the setImmediate 2");
//     process.nextTick(()=>console.log("this is process.nexttick 1"));
//     Promise.resolve().then(()=>console.log("this is the promise.resolve 1"));
// });
// setImmediate(()=>console.log("this is the setImmediate 3"))//microtask queues are executed in between the check queues

// setTimeout(()=>console.log("this is setTimeout 1"),0);
// setImmediate(()=>console.log("this is setImmediate 1"));//The order of execution can never guaranteed
//settimeout is always execute before setImmediate

//CLOSE queue
const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("this is readable stream close event callback")//final execution
});
setImmediate(()=>console.log("this is setImmediate 1"));
setTimeout(()=>console.log("this is setTimeout 1"),0);
Promise.resolve().then(()=>console.log("this is promise.resolve 1"));
process.nextTick(()=>console.log("this is process.nexttick 1"));