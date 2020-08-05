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