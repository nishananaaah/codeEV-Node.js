//Micro-Task-Queues
// console.log("console.1");
// process.nextTick(()=>console.log("this process.next 1"))//nextTick queue
// console.log("console.2")

// Promise.resolve().then(()=>console.log("this is promise.resolve 1"))//promise queue //after
// process.nextTick(()=>console.log("this is process.next 1"))//before


//Timer queues
// setTimeout(()=>console.log("this is setTimeout 1"),0)
// setTimeout(()=>{
//   console.log("this is setTimeout 2")
//   process.nextTick(()=>
//     console.log("this is the inner nextTick inside the setTimeout")
//   )
// },0);
// setTimeout(()=>console.log("this is setTimeout 3"),0)
// process.nextTick(()=>console.log("this is process.next 1"));
// process.nextTick(()=>{
//     console.log("this is process.next 2");
//     process.nextTick(()=>
//     console.log("this is the inner tick inside the tick"))
// });
// process.nextTick(()=>console.log("this is process.next 3"));

// Promise.resolve().then(()=>console.log("this is promise.resolve 1"));
// Promise.resolve().then(()=>{
//     console.log("this is promise.resolve 2");
//     process.nextTick(()=>
//       console.log("this is the inner next tick inside the promise block")//nextTick queue is the prioty
//     );
// });
// Promise.resolve().then(()=> console.log("this is promise.resolve 3"))

//5th experiment
setTimeout(()=>console.log("1"),1000);
setTimeout(()=>console.log("2"),500);
setTimeout(()=>console.log("3"),0);//executed in fifo order first in & first out
