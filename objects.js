
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
 * ! We looped through our array.  Can we loop through objects too?
 * * Yes we can!  We can use a for of loop.  Lets try one out
 * * source: https://zellwk.com/blog/looping-through-js-objects/
*/
for(let property in sandwich){
    console.log(property); //* this will give you a list of the properties of an object
    //! We can also checkout properties and their values...aka.  keys and their values
    //* A key is a label we give to a property, eg. height is a label for how tall someone is
    //* Bread is a label describing the outside of our sandwich
    console.log(`${property}: ${sandwich[property]}`);
}
// ! Lets try this again in a different way, where we get keys and values
for(let property in sandwich){
    //! We can also checkout properties and their values...aka.  keys and their values
    //* A key is a label we give to a property, eg. height is a label for how tall someone is
    //* Bread is a label describing the outside of our sandwich
    console.log(`${property}: ${sandwich[property]}`);
}

//* but there is more, we can get just the keys with Object.keys(objectName)
console.log(Object.keys(sandwich));
//* or just the values with Object.values(objectName);
console.log(Object.values(sandwich));
//* or all the entries with Object.entries(objectName);
console.log(Object.entries(sandwich));

// *lets have a little look at functions now!