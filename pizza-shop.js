const EventEmitter = require("node:events")
class PizzaShop extends EventEmitter{ 
    constructor(){
        super();//class based inheritanc feature // keyword
        this.orderNumber = 0//the class wants to inherit the event emitterclass
    }
    order(){
        this.orderNumber++
        this.emit("order",size,topping)
    }
    displayOrderNumber(){
        console.log(`Current order number:${this.orderNumber}`)
    }
}
module.exports = PizzaShop