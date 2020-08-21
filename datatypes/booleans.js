/**
 * * So far we have strings and numbers.  Lets move on to Booleans
 * * Booleans can either be true or false
 * 
 * * False is based on the idea that some values are always viewed by 
 * * javaScript as not true.  The general term for this is falsy.
 *  
 * * The following values are falsy:
 * * false, 0, ''(which is an empty string), null, undefined, and NaN(which stands from not a number)
 * 
 * * Most of the time for this semester we will stick to false
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

// ! Booleans are great, but now that we also have strings and numbers,
// ! it is time to get onto Arrays! 