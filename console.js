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
 * 
 * !we are going to start with using a console log
 * !more details on datatypes in the next few files
*/

// !Source:  https://youtu.be/jpc68FlbT10
/**
 * * console has a bunch of useful features!  The ones used most often are:
 * * log
 * * table
 * * warn
 * * error
 * * clear
 * 
 * * The simplest one to start with is console.log("thing to show in the console")
 * * Console log can show just about every datatype in the console of your browser
 * * For the purposes of this demo, open chrome
 * * Open your developer tools by going to the 3 dots on the top right
 * * Then click on "more tools", then click "developer tools"
 * * Finally click on the console tab!
 * * Alternately if you are on mac, press option-command-i
 */
// !now lets try console.log!
console.log('Programming is art');
// * You should see 'Programming is art' in your console
// * can we change the colour though?  Plain black text isn't doing the job for me today!
console.log("%c Programming is art!", "color: green; font-style: italic; font-size: 40px");
//* the %c represents the css that came after the comma!

// * This will also work with any other datatype too!  Lets try an array!
console.log(["Cheese","Bread", "Lettuce"]);
// * Lets try this with an object now!

console.log({name: "Sven", favouriteColour:"Mauve", age:22});
// * in each case, we saw the data in the console, but we have a problem.
// * The object could be shown more clearly!
// * Lets try console.table
console.table({name: "Sven", favouriteColour:"Mauve", age:22});
// * thats much more readable

// * sometimes we go to places in our code that we might not want to be in....
// * so we also have console.warn.  Take note of the cool caution sign!
console.warn("uh oh! I'm not sure I should be here!");

// * sometimes we go to places in our code that we don't want to be in....
// * This could be useful in a try catch block(in a future file)
console.error("uh oh! I shouldn't be here!");

// * finally we might want to clear out all the other messages, so we only see what is important
// * for this we have console.clear
// * if you uncomment the line below, you'll se it in action
console.clear();
console.log("all the other voices are gone now!");

// ! Lets move on to strings!
