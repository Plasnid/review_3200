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
 */
