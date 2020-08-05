
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