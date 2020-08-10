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
 * ! this is only the tip of the iceberg though!
 * ! There are some I'd like you to pay close attention to:
 * * Pop - removes and returns the last element of the array
 * * Shift - removes and returns the first element of the array
 * * Push - adds elements to the end of the array and returns the new length
 * * Unshift - adds elements to the beginning of the array and returns the new length
 * 
 * * Sort - sorts your array in ascending or descending order
 * * Slice - returns an array with a slice of your larger array
 * * Splice - can add, remove, or replace elements from your array
 * 
 * * Map - runs a function against every element in the array
 * * Filter - returns an array filtered to just what you are looking for
 * * Every - returns true if what you are filtering on is true in every entry
 * * Some - returns true if what you are filtering on exists at least once
 * 
 * ! Now some examples:
 * * We'll start by putting together an array of animals!
 * * Please note that the last element of the array does not end with a comma(,)
 */

let animals = [
    "alicorn",
    "aardvard",
    "seal",
    "grizzly bear",
    "water bear",
    "alligator",
    "sealion",
    "orca",
    "mugwump"
];

// ! Lets start with pop and shift
// * pop removes and returns the last element of the array
// * the last element of the array is "mugwump"...that is not a real animal!  Lets remove it
console.log(animals);
let lastAnimal = animals.pop();
console.log(animals);
console.log(lastAnimal);

// * looks better, but there is still a problem!  Alicorns, while cool(winged unicorn), don't exist!
let firstAnimal  = animals.shift();
console.log(animals);
console.log(firstAnimal);

// ! Thats great for removing entries, what about adding?  Lets add some real animals!
// * For this we will use push and unshift
// * push adds entries to the end of the array, unshift adds entries to the start of the array
animals.push("elephant", "albatros"); // * I chose to add 2 to the end of the array, but you can add any number!
console.log(animals);

// * now lets add entries to the begginning of the list
animals.unshift("blue whale","great white shark");
console.log(animals);

// * now we have a list I like, lets sort the list!
console.log(animals.sort());
// * with numbers this can get a little messier
let luckyNumbers = [100,9,72,13,27,3000];
console.log(luckyNumbers.sort());
// * That just doesn't look right...  how do we fix this?
console.log(luckyNumbers.sort((a, b) => { return a - b }));
//* much better...but what if we wanted descending numbers?...lets switch the b and a!
console.log(luckyNumbers.sort((a, b) => { return b - a }));

// ! Slice and Splice
// * In this next section we'll look at slice and splice
// * lets start with slice.
// * slice(startIndex, endIndex). If you leave out the end index, it will go right to the end of the array
// * I would like only the great white shark and the grizzly bear.  Our array has been sorted so lets see
// * where they are. They appear to be entries 5 and 6, so that means I need to end on 7.
// * I want slice to grab 5 and 6, but stop at 7
console.log(animals);
// * getting just the shark and the grizzly bear
// * we are getting back a slice of the array
let carnivoresToday = animals.slice(5,7);
console.log(carnivoresToday);
//* what does our animals array look like now?
console.log(animals); 
//*notice the shark and the bear are still in our original array, but we now have a smaller array too


// * Splice is a bit different.  Splice lets us remove entries, but also lets us add replacements
// * Splice has a direct effect on the original array
// * array.splice(start, numEntriesToRemove,[entries to add]);
// * I would like mealworms to be in place of alligator.  Alligator is in the #2 slot
animals.splice(2,1,"mealworms");
console.log(animals);  // * now alligator is gone, and mealworms is in its place

// * We have not yet covered map, filter, every, and some.  We will explore those in the next section
// * where we look closely at objects, and how objects work with arrays.

/** 
 * * To see more info about array commands check out
 * * https://www.abhishekdeshmukh.com/blog/javascript-array-methods
 * * Do they seem a little similar to string functionality.....what are the chances ;)
 */