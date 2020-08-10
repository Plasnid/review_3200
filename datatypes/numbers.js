/**
 * * What about numbers?  Lets look at those now.
 * * Numbers NEVER have quotes, because a number in quotes is a string
 * *
 * * typeof() is a function in JavaScript for finding out datatypes
 * * It isn't perfect, but in this case, it is very helpful!
 */
let notANumber = "9";
console.log(typeof(notANumber));
let actuallyANumber = 9;
console.log(typeof(actuallyANumber));

/**
 * * Numbers in Javascript can be integers or decimals
 * * Unlike many of the other datatypes, number manipulation seems to be 
 * * in Javascript rather than in the number datatype
 * 
 * * One command for dealing with numbers is parseInt(thingToParseHere!)
 * * This command can change a string of a number or a number into an integer
 * * An integer is a number with no decimal places
 * * We'll try it first with a float(a number with decimal places)
 * * In each case the float will become an integer(A number with no decimal places)
 */
let age = 35.5;
console.log(parseInt(age));

/**
 * *That same command will also work with the string of a number too!
 */

let lengthOfSandwich = "12.2";
console.log(parseInt(lengthOfSandwich));

/**
 * * There is a similar set of functionality for floats too!
 * ! The command is called parseFloat
 * * We'll try converting a string to a float
 */
let caloriesInFries = "3000.1";
console.log(parseFloat(caloriesInFries));

/**
 * * There are other numerical properties too, but they tend to be inside of the Math object
 * * There are 3 of them that we use the most!
 * * Math.random() - which will give you a random number between 0 and 1
 * * Math.floor(numberToRoundDown) - gives you the lowest closest integer
 * * Math.ceil(numberToRoundUp) - gives you the highest closest integer
 */

 // * First lets get a random number.  We use this to make our programs and games a little less predictable
let theRando = Math.random();
console.log(theRando);
// * Floor is for rounding down.  We often use it when finding out what element of an array you're on
// * This is not the only use case though
console.log(Math.floor(3.9)); // ! notice that this will become 3, the closest integer down
// * Ceil is for rounding up, like if you're out for dinner with a small child
// * They may be little, but you can't tell the server that you need 2.5 meals!  No its 3 meals, one is just smaller
console.log(Math.ceil(3.9)); // ! This will become 4, the closest integer up!

// * other things in programming that are numbers are intervals and timeouts....but we'll get there ;)
// ! Lets go on to Booleans!