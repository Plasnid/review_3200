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
