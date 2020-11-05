function Fruit(taste,color){
    this.color=color;
    this.taste=taste;

}

// new keyword
let mango=new Fruit("sweet","yellow");
let orange=new Fruit("sour","orange");

// one way
var apple={
    taste:"sweet",
    color:"red",
}

// class keyword (ECMAScript)
class FruitClass{  // Hoisted
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};

// function- declaratio, function expression
let kiwi=new FruitClass("sour","green");

// class expression  // not hoisted
let FruitClass2=class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
let kiwi2=new FruitClass2("sour","green")

