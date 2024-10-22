// const EventEmitter =require("node:events")
// const emiter = new EventEmitter()
// emiter.on("order-pizza", (size,topping)=>{
//     console.log(`Order recieved! Baking a ${size} Pizza with ${topping}`)//dispatching and responding
//     //event emiting
// });
// emiter.on("order-pizza",(size)=>{
//     if(size==="large"){
//         console.log("Serving Complimentary Drink")
//     }
// })
// console.log("DO work the event occurs in the system")
// emiter.emit("order-pizza","large","mashroom")