// * In this section we'll talk about some terminology regarding programming!
// * source: https://morioh.com/p/f716674e3196?f=5c21fb01c16e2556b555ab32&fbclid=IwAR2_yDbupSXwDdfz_ecOnZHMqCQLNpHII3RWHrfksaq4gVHCpbDMHJYRij8

// * As we continue through the semester we will come across a number of concepts and terms
// * Lets talk about some of the most important ones!

/**
 * ! Arity
 * * Arity refers to how many parameters a function takes in
 * * A functon that takes in nothing, has an arity of 0
 * * See the example below:
 */

function helloWorldOfArity(){
    console.log("I have no arity!");
}

// * A function with with 2 parameters has an arity of 2!
// * Since the function takes in x and y(2 variables) it's arity is 2
function findArea(x,y){
    return x*y;
}

/**
 * ! Anonymous
 * * Anonymous means that something is nameless
 * * We often see this in anonymous functions
 * * Here is an example!
 */
(function(){
    console.log("I have no name!");
})();
/**
 * * The example above is a function with no name
 * * Notice that it ends with a ();
 * * This means it runs itself!  Check out your console to see it in action
 */

/** 
 * ! Closure
 * * This is a tricky one that comes up in interviews all the time
 * * The term itself refers to sealing something
 * * For our purposes think of a function inside of a function
 * * Closure is about what each level of that function is allowed to see
 * * Listed below is an example from: https://www.w3schools.com/js/js_function_closures.asp
 * */ 
//*lets walk through what happens here
let add = (function () {
    console.log("add has been called");
    // * 2. Add defines counter, which is now visible to the anonymous function below
    let counter = 0;
    console.log(counter);
    // * 3. Add returns the anonymous function which increases counter whenever it runs
    // * This means add is to you the programmer, representing the anonymous function
    return function () {
        counter += 1; 
        // * 4. the anonymous function returns the value of counter as end product of being run
        // * functions can see variables above them.
        // * counter is enclosed by the outermost self running function, and accessible to the inner function
        // * This is a closure...I know, its a bit confusing
        return counter
    }
})(); // * 1. Add runs itself first. notice this whole statement ends with (); 

// *we run add, and it gets back the inner function, and increases counter by 1, and returns counter
// * counter is 1
console.log(add());
// * counter is 2
console.log(add());
// * counter is 3
console.log(add());

//! Its a tough one to wrap your head around.  Where do we even use this???
// * We use this to make tool libraries, and also to my customized functions with 
// * currying and partial application.

//* This is a tricky concept....don't worry if you don't fully understand it yet

/**  
 * ! Currying
 * * Currying takes a function with multiple arguments, and returns a function for each argument
 * * Remember Arity?  Each function has an arity of 1
 * * Lets start with a non curried function where we greet a person by name
 * * Our function will take in a name and a greeting
 * * As a non-curried function it will look like this:
*/
function greetPerson(name, greeting){
    console.log(`${greeting} ${name}`);
};
greetPerson("Stan", "Hello");

// * As a curried function it looks like this:
// * 1. Our outer function takes in a name
function greetPerson2(name){
    // * 2. we return the inner function, which asks for a greeting
    return function(greeting){
        // * 3. our inner function has access to both name an greeting!
        // * remember closures?  This is one 
        console.log(`${name} ${greeting}`);
    }
}
// * we call it a little differently
greetPerson2("Bob")("Hey");
/**
 * * Why use this?
 * * This lets us customize functions
 */

