// c
// console.log("First")
// const filecontent = fs.readFileSync("./file.txt","utf-8")// the sufix represnts the methods readfile in the synchronous way
// console.log(filecontent);//reading file synchronously
// console.log("second")

// fs.readFile("./file.txt","utf-8",(error,data)=>{
//       if(error){
//         console.log(error)
//       }else{              //its a callback function
//         console.log(data)//reading file asynchronously
//       }
// })
// console.log("Third")

// fs.writeFileSync("./greet.txt","Hello Goodmorng")//synchronous
// fs.writeFile("./greet.txt","Hello nishana",{flag:"a"},(err)=>{//asynchronous
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file written")
//     }
// })

// fs Promise Module
const fs = require("node:fs/promises")
// console.log("first")// to prove that it was work in asynchronously
// fs.readFile("./file.txt","utf-8")
// .then(data=>console.log(data))//promise resolves successfully
// .catch(error=>console.log(error))//promise rejects an error
// console.log("second")

//Async function 
async function readFile(){
    try{
        const data = await fs.readFile("file.txt","utf-8")
        console.log(data)
    }catch(err){
console.log(err)
    }
}
readFile();