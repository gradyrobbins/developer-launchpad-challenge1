
// // Level 1 In the first level you will start by producing a list of the happy primes below 100 from a list of primes 
// // and a list of happy numbers. Then take a user input and determine if that number is a happy prime or not.
console.log("Hello world")

var primearray1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var happyArray1 = [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100];




// this isn't looping properly; i only return one value, "7", when i execute the function
function callback(primearray1, happyArray1){
  
  var happyPrimeArray = [];

  for (var j = 0; j < happyArray1.length; j++) {
     
      for (var i = 0; i < primearray1.length; i++) {
          if(primearray1[i] === happyArray1[j]){
            happyPrimeArray.push(happyArray1[j])
            return happyPrimeArray;
          }
        
      }
      
  }
    
  }

function filter(primearray1, happyArray1, callback){
  return callback(primearray1, happyArray1);
}

var filtered = filter(primearray1, happyArray1, callback);
  console.log(filtered);
    

let userInput = prompt("what is your number?");
console.log("userInput" , userInput);


// // if arrayPrimeNumbers.includes(userInput)


// // var array1 = [1, 2, 3];

// // console.log(array1.includes(2));
// // expected output: true

// // var pets = ['cat', 'dog', 'bat'];

// // console.log(pets.includes('cat'));
// // expected output: true

// // console.log(pets.includes('at'));
// // expected output: false