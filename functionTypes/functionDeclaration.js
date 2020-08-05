/**
 * * Functions: Give your actions a name!
 * * Function let us take all the steps involved in doing something and group them with a name
 * * We already do this.  For example, when someone asks you to take a step:
 * * lift leg off of ground, bend knee on raised leg, lean forward, straighten knee, etc.....
 * *
 * * So many small pieces to one little action! We just named it, "take a step"
 * * We give it a leg and a direction and we don't even think about it...our minds are incredible!
 * 
 * * Last semester we talked about 3 different kinds of functions
 * 
 * *The first kind we talked about was function declarations!
 * *
 * * function functionName(parameters go here, separated by commas){
 * *       Instructions of what should happen go here!
 * * }
 * * Not every function needs parameters.  Lets look at an example function!
 */

//* Function Declaration
//* notice that we are using camel case.  Also we start the function with a lower case letter
//* amIThirsty in this case will be a boolean, so it can be true or false
function doIDrinkSomeWater(amIThirsty){
    //* In here we have an if statement checking if amIThirsty is true
    if(amIThirsty==true){
        console.log(`I would like some water!`);
    //* The else statement is for any case where amIThirsty is false
    }else{
        console.log("I'm fine thanks! I don't need a drink");
    }
}
//* lets call the function!  I'm going to tell the function that I'm thirsty.
doIDrinkSomeWater(true);

//* You don't need parameters for every function, and not every function looks like this one
//* The function above is just an example of what you could do!