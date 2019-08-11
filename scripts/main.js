// console.log("hello world main.js");
let happy100 = [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100];
let happy500 = [];
let happy = document.getElementById("happy");
happy.innerHTML += happy100;


let prime = document.getElementById("prime")
let prime100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// below array via google search.  copy/pasta
let prime500 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499
];
prime.innerHTML += prime100;

let happyprime = document.getElementById("happyprime")
let happyprime100 = [];
let happyprime500 = [];

//this function compares the "prime" and "happy " arrays to find the elements that are common to both arrays, which is a "happy prime"
//Loop through the second array(b) each time you iterate over an element in the first array (a), then check for matches.
function getMatch(a, b) {
    var matches = [];
    for (var i = 0; i < a.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (a[i] === b[e]) matches.push(a[i]);
        }
    }
    return matches;
}
let x = getMatch(prime100, happy100)
happyprime100.push(x);
// happyprime.innerHTML += happyprime100



//this function captures user input, validates it, and determines if the user's guess is correct or not
function myFunction() {
    var x, text;

    // Get the value of the input field with id="number"
    x = parseInt(document.getElementById("number").value);

    // data validation:
    // Is user Input valid:less than one, greater than 100, or NaN
    if (isNaN(x) || x < 1 || x > 100) {
        alert("invalid entry")
        return;
    }
    let y = getMatch(prime100, happy100)
    if (y.includes(x)) {
        text = `Your guess :   ${x} is a HAPPY PRIME`;
    } else (text = `${x} is not a happy prime, try again`)
    document.getElementById("demo").innerHTML = text;
}


//level 2 challenge
let level2 = document.getElementById("level2");

//iterate over every number and return the squared value of that number.  this array is what we will pass in as an argument to determine if it is "happy" or not.  A happy number is a number that reduces to one when you take the sum of the squared digits and continue iterating it.
for (let n = 100; n < 501; n++) {
    if (n == 100) {
        // console.log(`happyPrime Numbers below 100, brought in from level1 challenge above: ${happyprime100} `)
    } else {
        const getDigits = n => Array.from(String(n)).map(c => parseInt(c))

        const getSquaredDigitsSum = n =>
        getDigits(n)
        .map(n => n ** 2)
        .reduce((a, b) => a + b, 0)

        const isHappy = n => {
            const _isHappy = ([n, ...previousSteps]) =>
            previousSteps.includes(n)
            ? n === 1
            : _isHappy([getSquaredDigitsSum(n), n, ...previousSteps])
            return _isHappy([n])
        }
        if (isHappy(n)) { happy500.push(n) }
        // If you require code to run only when the statement returns true (and do nothing else if false) then an else statement is not needed.
        // else {(`${n} : not happy`)}
    }
}

let y = getMatch(prime500, happy500)
happyprime500.push(y)

// console.log(`Prime500 : ${prime500}`)
// console.log(`Happy500 : ${happy500}`)
// console.log(`HappyPrime500 : ${happyprime100},${happyprime500}`)
level2.innerHTML += `${happyprime100},${happyprime500}`

//pseudocode:
// 1. See if the current number is 1.
// If yes, we're starting the evaluation process.
// If no, the current number is what we set in Step 4 below, the next number to evaluate.
// 2. See if our current number has more than one digit.
// If yes, split the current number into single digits and multiply each digit by itself. Then add up the multiplication results into a single sum, or total.
// If no, multiply the number by itself to get a total.
// 3. See if the total, from either Step 2 operation, is a number in the list that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
// If yes, our current number is an unhappy number. Stop evaluating. Add the current number to our list of unhappy numbers.
// If no, repeat this multi-digit evaluation process in Step 1 until the result is 1. When the result is 1, we confirm our current number is a happy number. Add the current number to the list of happy numbers.
// 4. See if the current number is less than or equal to 500, the limit and last number to evaluate.
// If yes, increase our current number by one. Repeat steps 1, 2, and 3.
// If no, display our list of happy numbers and unhappy numbers.



//level 3 challenge
// let level3 = document.getElementById("level3");

//this function captures user input, validates it, and determines if the user's guess is correct or not
// function level3guess() {
//     var x, text;

//     // Get the value of the input field with id="number"
//     x = parseInt(document.getElementById("level3input").value);

//     // data validation:
//     // Is user Input valid:less than one, greater than 100, or NaN
//     if (isNaN(x) || x < 1 || x > 500) {
//         alert("invalid entry")
//         return;
//     }
//     let z = [];
//     z.push(happyprime100, happyprime500)
//     console.log(`happyprimes 1 - 500 : ${z}`)
//     if (z.includes(x)) {
//         text = `Your guess :   ${x} is a HAPPY PRIME`;
//     } else (text = `${x} is not a happy prime, try again`)
//     document.getElementById("demo3").innerHTML = text;
// }