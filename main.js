// Coding Question 1: Write a function in JavaScript called roundNumber() that takes a number as input and returns the number rounded to the nearest integer.

var user_Input = document.getElementById("userInput");
var h2 = document.getElementById("result");
function rounded() {
  var round_result = Math.round(user_Input.value);
  h2.innerText = round_result;
}

// Coding Question 2: Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.
// Hint: You can use Math.random() to generate a random number between 0 and 1, then scale and shift it to fit within the specified range.

var random_result = document.getElementById("random_result");
function generateRandomNumber() {
  random_result.innerText = Number(Math.random() * 100).toFixed(3);
}


// specified range.
// Coding Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.



var strInput = document.getElementById("str_input");
var numberResult = document.getElementById("Number_result");
function convertStrToNum() {
  numberResult.innerText = parseFloat(strInput.value);
}

