const PizzaShop = require("./pizza-shop");
const DrinkMachine =require("./drink-machine")
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();
pizzaShop.on("order",(size,topping)=>{
     console.log(`Order received! bake a ${size} with ${topping} pizza`)
     drinkMachine.serveDrink(size);
});
pizzaShop.order("large","mashrooms");
pizzaShop.displayOrderNumber();

// const DrinkMachine =require("./drink-machine")
// const drinkMachine = new DrinkMachine();
// drinkMachine.serveDrink(size);