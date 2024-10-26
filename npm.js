// const localmodule =require("./path-to-module");//local module
// const fs =require("node:fs")//core module//in built
// const upperCase =require("upper-case").upperCase//npm third party modules
// function greet(name){
//     console.log(upperCase(`Hello ${name} welcome to Nodejs`))
// }
// greet("Nishana")
// module.exports = greet;
const promise = new Promise((res,rej)=>{
    res("succes")
})
promise.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})
