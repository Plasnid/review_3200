console.log("welcome to ES5 Classes");

function Organism(organismName){
    this.organismName = organismName;
}
Organism.prototype.isAlive = true;
Organism.prototype.greeting = function(){
    console.log(`Hi my name is ${this.organismName}`);
}

let fred = new Organism("Fred");
fred.greeting();

let bob = new Organism("Bob");
bob.greeting();

function Snake(organismName, venomous){
    Organism.call(this,organismName);
    this.venomous = venomous;
}
Snake.prototype = Object.create(Organism.prototype);
Snake.prototype.climbTrees = function(){
    console.log(`${this.organismName} really likes to climb trees`);
}

let jim = new Snake("Jim", false);
jim.greeting();
jim.climbTrees();

function GilaMonster(organismName, venomous, numLegs){
    Snake.call(this, organismName, venomous);
    this.numLegs = numLegs;
}
GilaMonster.prototype = Object.create(Snake.prototype);

let gill = new GilaMonster("Gill", true, 4);
gill.greeting();
gill.climbTrees();
console.log(gill.numLegs);