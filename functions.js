
/**
 * * Functions: Give your actions a name!
 * * Function let us take all the steps involved in doing something and group them with a name
 * * We already do this.  For example, when someone asks you to take a step:
 * * lift leg off of ground, bend knee on raised leg, lean forward, straighten knee, etc.....
 * *
 * * So many small pieces to one little action! We just named it, "take a step"
 * * We give it a leg and a direction and we don't even think about it...our minds are incredible!
 * 
 * * Last semester we talked about 3 different kinds of functions
 * 
 * *The first kind we talked about was function declarations!
 * *
 * * function functionName(parameters go here, separated by commas){
 * *       Instructions of what should happen go here!
 * * }
 * * Not every function needs parameters.  Lets look at an example function!
 */

//* Function Declaration
//* notice that we are using camel case.  Also we start the function with a lower case letter
//* amIThirsty in this case will be a boolean, so it can be true or false
function doIDrinkSomeWater(amIThirsty){
    //* In here we have an if statement checking if amIThirsty is true
    if(amIThirsty==true){
        console.log(`I would like some water!`);
    //* The else statement is for any case where amIThirsty is false
    }else{
        console.log("I'm fine thanks! I don't need a drink");
    }
}
//* lets call the function!  I'm going to tell the function that I'm thirsty.
doIDrinkSomeWater(true);

//* You don't need parameters for every function, and not every function looks like this one
//* The function above is just an example of what you could do!

//* Function Expression
//* A functon expression is a function that is expressed or held by a variable
//* We saw this before in our object. isSentient is a function that lives in a variable in an object!
//* When a function lives in an expression

let walkIntoRoom = function(){
    console.log("I have walked into the room");
}
//*lets call the function
walkIntoRoom();

//* There is another way to use a function expression, and that is to make it into an IIFE
//* IIFE stands for: Immediately Invoked Function Expression
//* They are special because they have private inner sections and publicly exposed sections, like a bank
//* Lets try something out

let superBank = function(){
    //* private stuff goes here
    let actualBankBalance = 100;
    return{
        //* public stuff goes here
        findBankBalance: function(){
            return actualBankBalance;
        }
    }
}(); //* notice we have those round brackets at the end();, they run the function
//* Lets find out our balance from the bank...it should be 100
//* This self running function returns an object with functions to us!
//* we can run superBank.findBankBalance();
console.log("What is our bank balance?");
console.log(superBank.findBankBalance());
//* we said before that there are private and public sections
//* superBank.actualBankBalance is where our balance actual is...can we see it directly?
//* I don't want the whole script to break, so we are going to write this in a try(hint, it won't work!)
try{
    console.log(superBank.actualBankBalance);
}catch(error){
    console.log(error);
}
/** 
 * ! Surprise!  Yes, its undefined...because the actual balance is in the private area.
 * * We can't touch it...We can only access from the public space
 * * The great thing about IIFE's is that they let us choose what we show the world
*/

/**
 * * Finally we get to my favourite kind of function, one that has only been around since ES6
 * * Fat Arrow Functions
 * *
 * * Fat Arrow functions do a few things for us
 * * -they act as a short form letting us skip writing the word "function"
 * * -if they're written on a single line, they automatically return!
 * * -they inherit their "this"(where they are) from their parent 
 * *
 * * Lets have a look at how they can shorten things!
 * * We'll start with a function expression for adding 3 numbers
 */

let adder = function(a,b,c){
    return a+b+c;
}
console.log(`The first adder: ${adder(1,2,3)}`)
// ! With fat arrow functions we can shrink this down!
let adder2 = (a,b,c) => a + b + c;
console.log(`The second adder: ${adder2(2,3,4)}`);
// ! They both work, but the second one is less to type
