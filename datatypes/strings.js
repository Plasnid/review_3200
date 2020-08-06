/** 
 * *The most datatype is the string!
 * *Strings are any set of characters in a set of quotes
 * *There are 3 kinds that we use.  
 * * the first two are:
 * * " " double quotes
 * * ' ' single quotes
 */
/** 
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

// * Strings can do so much!  They are more than just a collection of characters!
// * Strings like all datatypes have methods.  Lets look at some of them :)

// * Last semester we talked about arrays.  I love arrays
// * Guess what, strings are very similar to arrays!

// * What if you needed to know the length of your string?
// * counting things manually is a waste of our time
// * lets get the computer to do it for us with .length

let wordOfTheDay = "Grubstake" // * this is a term for giving someone a loan
console.log(`${wordOfTheDay} is this long: ${wordOfTheDay.length}`);
// * I'm really glad that isn't a term for a steak made out of grubs
// * A steak made out of grubs would be disgusting

// * Next term to check out is slice()
// * Slice exists in Arrays too.  We used it last semester!
// * A string is a list of things in a numerical order starting from 0
// * lets take the string "Welcome Back";
// * The 0 character is W, the 1 character is e and so on
// * We can take a slice of these and use it elsewhere if we desire
// * lets get everything from the e of Welcom to the c of back
let welcomeMessage = "Welcome Back";
let welcomeSlice = welcomeMessage.slice(1,welcomeMessage.length-1);
console.log(welcomeSlice);

// * We can also find what character is at what numbered spot...
// * What is at the 1 spot...I think it should be "e", lets check
console.log(welcomeMessage.charAt(1)); // * hey it is!

// * Strings can act like arrays, but they aren't really arrays
// * How could we turn a string into an array?  .split("charToSplitOn")
// * Whatever character we choose to split on, will be what separates the 
// * entries in the array...and if we don't give it a character?
// * then each letter will be an array entry!

// !First lets try splitting on "e"
let eSplit = welcomeMessage.split("e");
console.log(eSplit); // * weird but it works

//! now lets try splitting the whole thing into array cells
let allSplit = welcomeMessage.split("");
console.log(allSplit);

// * The nice thing is that this can work in reverse too!
// * We can take an array and turn it into a string with .join("character to join with")
// * Lets rejoin allSplit...first with an underscore "_"

let joinedUnderscore = allSplit.join("_");
console.log(joinedUnderscore);  // * W_e_l_c_o_m_e_ _B_a_c_k

// * If we don't specify a character it will look like the original
// * lets try it!
let simpleJoined = allSplit.join("");
console.log(simpleJoined);  // * looks like the original!

// * We can also change things to all lower case or upper case
// * lower case would be
console.log(welcomeMessage.toLowerCase());

// * upper case would be
console.log(welcomeMessage.toUpperCase());

// * We can also take a string and change it to a number!
let myStringyNumber = "5"; // ! obviously this is a number...but it won't act like one.
console.log(myStringyNumber+myStringyNumber) // ! since when does 5 + 5 = 55? when its a string!
//* fortunately we can change datatypes as we like(within limits)
console.log(Number(myStringyNumber)+ Number(myStringyNumber)); //! and now it is 10...

// * What if we have a number and we want it to be a string?
let actualNumber = 10;
// * in this case I want to concatenate this twice to make 1010
// * If I add the numbers it will be 20 though
console.log(actualNumber+actualNumber);
// * Lets make this a string with .toString() on the number!
console.log(actualNumber.toString()+actualNumber.toString()); 

// ! There is so much more!  But I think this is enough for now!
// ! Lets move on to numbers!
