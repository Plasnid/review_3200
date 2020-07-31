//* Last semester we worked with console log, lets start with that!

console.log("I'm so glad to be back");

/**
 * * We had spent a lot of time with variables
 * * Variables are declared with either let or const
 * * Let and Const are part of ES6
 * *
 * * Earlier versions of JavaScript used var
 * * var is leaky, as it only stays inside of a function
 * * var is function scoped
 * * It can leak out of loops and get into code it shouldn't
 * * Avoid var.  Pretend var does not exist
 * 
 * * let and const are part of ES6
 * * They are block scoped, which means that any pair of {}
 * * will contain them!  They remain contently inside of functions
 * * loops, or any other use of braces!  Yaaay!
 * 
 *  * If you define a variable with let, you can change the value after you declare it
 *  * If you use const, once you set it, it stays set.  Const means constant!
 */

/**
 * * Naming is a BIG deal in JavaScript!  Sometimes hours worth
 * * of meetings go into naming things!  
 * * Names in JavaScript can start with a letter or an underscore(_)
 * * 
 * * Some names are made of multiple words
 * * 
 * * Lets make a variable for a student name
 * * We can't call it "student name"..you can't have spaces in variable names
 * * There are 3 main ways of naming variables. 
 * * snake case: student_name
 * * camel case: studentName <----this one is my favourite!!
 * * kabob case: student-name
 * *
 * * For the purposes of our work in class, and for assignments please use camel case
 * * If you start a variable name with a letter, always make it start with lower case
 * 
 * * We use upperCase starting letters for classes only!  What is a class?  
 * * Explanation of classes coming later this semester!
 */

/**  
 * * We had looked into a few different data types, those are:
 * * string 
 * * number 
 * * boolean 
 * * array
 * * object
*/

/** 
 * *The most basic one is the string!
 * *Strings are any set of characters in a set of quotes
 * *There are 3 kinds that we use.  
 * * the first two are:
 * * " " double quotes
 * * ' ' single quotes
 * 
 * *They're good for regular strings
 * *Here are some examples
 */
let studentName = "Bert";
let studentsFavouriteCheese = "Cheddar";

/**
 * * ES6 introduced a new one
 * * ` ` backticks
 * * Backticks are special because we can use ${variableNameHere} to put dynamic data
 * * into our string!
 * *
 * * We have a cheese and a name for the student!  Lets combine them!
*/
let studentsFavourite = `${studentName} likes to eat ${studentsFavouriteCheese} cheese`;
//* if we console log this, what do we get?
console.log(studentsFavourite);
//* Check your console in chrome..it should say "Bert likes to eat Cheddar cheese"

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
 * * So far we have strings and numbers.  Lets move on to Booleans
 * * Booleans can either be true or false
 * 
 * * Lets try out an example, by checking if flamingoes are native to canada
 * * Sadly they are not, so we have to say false...a good variable name...let see
 * * How about flamingoesAreCanadian?  That works, and it is camel case :D
 */

let flamingoesAreCanadian = false;
console.log(flamingoesAreCanadian);
console.log(typeof(flamingoesAreCanadian));

/**
 * * That worked well, lets try another!
 * * Programming is the best class
 * * A good variable name for this is bestClassIsProgramming
 */

let bestClassIsProgramming = true;
console.log(bestClassIsProgramming);
console.log(typeof(bestClassIsProgramming));

/**
 * * Now to get to the really fun one, Array
 * * An array is a numbered list of things
 * * An array can hold any other datatype, even another array
 * * Arrays count from 0 instead of 1
 * 
 * * When I get ready in the mornings, the room is dark
 * * Fortunately, I have a variety of fun socks, but I can't see them in the dark
 * * Lets make an array of all the socks styles
 * 
 * * [] is how we start a blank array.
 * * We can use push, to push values into an array .push is a method all arrays have
 * * Lets start our array with things in it, then we can push some extra items into it
 * * We are making an array of strings, each string describes the pattern of the socks
 */

let profSocks = ["skulls", "unicorns", "pizza", "plaid", "tiger stripes", "elves", "taco", "pirate gold"];

/**
 * * I could go on, but that is a nice selection of styles
 * * So lets find out a few things!
 * * We can find the length of the array with .length
 */
console.log(profSocks.length); // * yep 8 pairs of socks!

/**
 * * Since arrays start counting at 0, the last item in the array is the length -1
 * * Lets find the first element and the last element
 */

console.log(profSocks[0]) // *The first pair of socks should be skulls! Check in the browser
console.log(profSocks[profSocks.length-1]); //* so this will give us profSocks[7] in this case which should be "pirate gold"...go check!

// *lets use push to add the surf board socks!
profSocks.push("Surf Boards");
console.log(profSocks.length);
console.log(profSocks[profSocks.length-1]); //* now gives us profSocks[8] which is "surf boards"...go check!

/** 
 * * If we want a specific set of socks from our array and we know the number we can call that number
 * * I think today is a Pizza Sock kind of day...pizza socks are the third one in
 * * so we count 3 numbers up 0, 1, 2...pizza socks are in the slot numbered 2
 */ 
console.log(profSocks[2]);

/**
 * * We can also loop through the array!  Lets try a for loop!
 * * What does each part mean?
 * *
 * * let i=0; tells us that we are going to count from 0
 * * i<profSocks.length; tells us that "i" the loop only works when i is less than the length of the array
 * * i++ tells us that the number will increase after each loop
 * *
 */
for(let i=0;i<profSocks.length;i++){
    console.log(profSocks[i]);
};

/**
 * * Alright, so that was forwards, what about backwards?
 * * Remember doing this?
 * * Think about the differences between forwards and backwards, what is different?  Why?
 */

console.log("lets loop backwards!");
for(let i=profSocks.length-1;i>=0;i--){
    console.log(profSocks[i]);
};

/**
 * * Here are a couple of other loops!
 * * Here is a for loop with forEach, that takes in a function as it's parameter!
 */

profSocks.forEach(socks => console.log(`I am wearing ${socks} socks today!`));

/** 
 * * More on functions and arrays later though as we have one more datatype to cover
 * * Objects!
 * 
 * * Arrays like to sort things by numbers
 * * Objects like to give things names, and we call those names Keys
 * * Objects are collections of keys, and those keys have values attached
 * * Those values can be any datatype..and I mean any datatype, even other objects, or arrays
 * 
 * * Lets make one! Lets describe a sandwich! Yum!
 */

/**   
 * * So here we have a sandwich object, it will have
 * * bread, cheese, vegetables, meat, and sauce
 * * We might even 
*/
let sandwich = {
    // *starting healthy, we have whole wheat bread
    bread: "Whole Wheat",
    //* whats going on here?  an object can even contain other objects
    //* here we see we have cheddar cheese, 2 slices of it to be exact
    cheese: {cheeseType: "Cheddar", numSlices:2},
    //* notice, our vegetables are in an array
    vegetables:["lettuce", "tomatoes", "green peppers"],
    //* our object can also hold numbers!
    sizeInInches: 12,
    meat: "smoked turkey",
    //* we even have a boolean in here!
    isHot: false,
    //* and even a function!  Yeah, a function
    //* A sentient sandwich is a creepy concept, but why not!
    isSentient: function(){
        if(Math.random()>.95){
            console.log("I am the amazing thinking sandwich!");
        }else{
            console.log("I'm just a sandwich. I have no thoughts!");
        }
    }
}
/**
 * * if we want to see our object in the console we have some options
 * * we can use console.log(object)
*/
console.log(sandwich);

/**
 * * We have another option though, and that is console.table
 */
console.table(sandwich);

/**
 * * We an call any of the keys inside of our object too!
 * * Lets check on what bread we used using dot notation!
 * * After that, lets do it with bracket notation!
 */
console.log(sandwich.bread);
console.log(sandwich["bread"]);
/**
 * * As long as the key is a string we can call it
 * * Lets do a check to see if our sandwich is sentient..I know thats weird, but lets try!
 */
sandwich.isSentient();
/**
 * * Arrays and Objects are awesome!  They have all sorts of amazing built in functionality, like forEach!
 * * ForEach is great. It takes in a function... what is a function again? Lets take a look!
 */

/**
 * * Functions: Give your actions a name!
 * * Function let us take all the steps involved in doing something and group them with a name
 * * We already do this.  For example, when someone asks you to take a step:
 * * lift leg off of ground, bend knee on raised leg, lean forward, straighten knee, etc.....
 * *
 * * So many small pieces to one little action! We just named it, "take a step"
 * * We give it a leg and a direction and we don't even think about it...our minds are incredible!
 * 
 * * Last semester 
 */