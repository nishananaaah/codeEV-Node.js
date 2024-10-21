class superHero{
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }

    setName(name){
        return this.name = name;
    }
}
// module.exports= new superHero("Batman")
module.exports=superHero;