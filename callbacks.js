function greet(name){
    console.log(`hello${name}`)
};
function higherorderfn(callback){
    const name="nishana";
    callback(name);
}
higherorderfn(greet)//a function that passed another function as argument called callback function
//a function that accepts the function as argument or returns a function called higherorder function 

//in node js the callbacks works delay for the execution ofcode  after an event or perticular  time will be occured

//EVENT
// function callback(){
//     document.getElementById("demo").innerHTML="Hello World";
// }
// document.getElementById("btn").addEventListener("click",callback)