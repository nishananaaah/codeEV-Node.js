(function(message){
    const superHero="Batman"
    console.log(message,superHero)//parameters ans  arguments give in the IIFE
})("hello");
(function(message){
    const superHero="Supermaan"
    console.log(message,superHero)
})("hey")
//each function gets its own private scope
//nodejs access this same pattern