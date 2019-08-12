console.log("hello world writeToDOM.js")

// "borrowed" from Jordan Costelloe
// What is jQuery?
// // How do I access it?


// // First, let's go through the basic process of creating and appending an element with vanilla JavaScript and jquery

// create a new div
const $jBloop = $("<div>")
// Give your div some text
$jBloop.html("Level 1: In the first level you will start by producing a list of the happy primes below 100 from a list of primes <br/>" )
// $jBloop.append("Here are the happy primes below 100 : " + happyPrimeArray)

// append it to the DOM
$("#bloop").append($jBloop);

// alternative method to append it to the DOM
// $("#jquery-container").append($jMagic);
// $jBloop.appendTo($("#bloop"));
// There are lot of ways to append things with jQuery! I personally like .appendTo() and .prependTo() a lot because they're nice when you want to chain jQuery methods.


// add more stuff:
$jBloop
  .append( document.createTextNode( "!!!" ) )
  .css( "font-size", "1.1em" );
