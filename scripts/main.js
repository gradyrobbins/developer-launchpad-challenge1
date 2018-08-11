console.log("Hello world main.js")

// // Level 1 In the first level you will start by producing a list of the happy primes below 100 from a list of primes 
// // and a list of happy numbers. 

var primearray1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var happyArray1 = [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100];

var happyPrimeArray = [];

// create a nested for-loop to compare the 2 arrays, push "matches" into happyPrimeArray[]:
function comparethem() {

  for (var j = 0; j < happyArray1.length; j++) {
    let currentHappyValue = happyArray1[j];
    for (var i = 0; i < primearray1.length; i++) {
      let currentPrimeValue = primearray1[i];
      if (currentPrimeValue === currentHappyValue) {
        happyPrimeArray.push(currentHappyValue)
      }
    }
  }
}
// invoke the function
comparethem()

console.log("happy Prime array " + happyPrimeArray);


// Then take a user input and determine if that number is a happy prime or not.
let userInput = parseInt(prompt("what is your number?"));

function userGuess() {
  for (var z = 0; z < happyPrimeArray.length; z++) {
    let currentPrimeValue = happyPrimeArray[z];
    if (currentPrimeValue === userInput) {
      console.log("you got it")
    }
    else console.log("wrong guess")
  }
}  

// invoke the function
userGuess();