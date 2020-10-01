
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
console.log("Keys:");
console.log(Object.keys(sandwich));
//* or just the values with Object.values(objectName);
console.log("Values:");
console.log(Object.values(sandwich));
//* or all the entries with Object.entries(objectName);
console.log("entries");
console.log(Object.entries(sandwich));

/** 
 * ! Accessors: getters and setters in Objects
 * * source: https://www.w3schools.com/JS/js_object_accessors.asp
 * * Just like in a bank account statement, there are things we want
 * * the user to read, but not change directly, like account balances.
 * 
 * * Getters and setters give us a way to access values and make security checks
 * * to ensure that whoever is changing those values, actually has the right to.
 * 
*/ 
let bankInfo = {
    firstName: "Bow",
    lastName: "Joeman",
    loggedIn: false,
    account: 12456789,
    accountBalance: 100,
    // * this kind of looks like a function doesn't it?
    get balance(){
        if(this.loggedIn==true){
            return this.accountBalance;
        }else{
            return "I don't think so bucko!"
        }
    },
    // * this also looks very much like a function
    set balance(updatedBalance){
        if(this.loggedIn==true){
            this.accountBalance = updatedBalance;
        }
    }
}
// * first lets call for our balance
// * notice that loggedIn is set to true...what do we get?
// * In the code below we access balance, which looks like it should be a function
// * but where is the ()????  
// * Getters are accessed like a value, not a function, so no ()
console.log(bankInfo.balance);
// ! try changing the value of loggedIn in the object to false...what happens?
// * It doesn't give you access.  Getters and setters act like values but let you
// * take care of background processes(like security checks)

// * lets have a look at the setter now!
// * we can leave the loggedIn value at false for the moment
bankInfo.balance = 100000000 // * I sure wish I could do this to my bank account!
// * now lets change the value of loggedIn to true and see our amazing riches!
bankInfo.loggedIn = true;
console.log(bankInfo.balance); // ! except it didn't work, because we were not logged in. 
// * We added a barrier to accessing or changing the value of accountBalance
// * We gave accountBalance an alias(alternate name) of balance, and that let us control the flow of information
// * Since we are logged in now, lets try changing the balance again
// * Lets make ourselves pretend millionaires
bankInfo.balance = 100000000;
console.log(bankInfo.balance);  // * now I can pretend retire!