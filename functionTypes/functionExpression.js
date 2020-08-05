//* Function Expression
//* A functon expression is a function that is expressed or held by a variable
//* We saw this before in our object. isSentient is a function that lives in a variable in an object!
//* When a function lives in an expression

let walkIntoRoom = function(){
    console.log("I have walked into the room");
}
//*lets call the function
walkIntoRoom();

//* There is another way to use a function expression, and that is to make it into an IIFE
//* IIFE stands for: Immediately Invoked Function Expression
//* They are special because they have private inner sections and publicly exposed sections, like a bank
//* Lets try something out

let superBank = function(){
    //* private stuff goes here
    let actualBankBalance = 100;
    return{
        //* public stuff goes here
        findBankBalance: function(){
            return actualBankBalance;
        }
    }
}(); //* notice we have those round brackets at the end();, they run the function
//* Lets find out our balance from the bank...it should be 100
//* This self running function returns an object with functions to us!
//* we can run superBank.findBankBalance();
console.log("What is our bank balance?");
console.log(superBank.findBankBalance());
//* we said before that there are private and public sections
//* superBank.actualBankBalance is where our balance actual is...can we see it directly?
//* I don't want the whole script to break, so we are going to write this in a try(hint, it won't work!)
try{
    console.log(superBank.actualBankBalance);
}catch(error){
    console.log(error);
}
/** 
 * ! Surprise!  Yes, its undefined...because the actual balance is in the private area.
 * * We can't touch it...We can only access from the public space
 * * The great thing about IIFE's is that they let us choose what we show the world
*/