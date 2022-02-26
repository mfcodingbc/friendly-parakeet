// Assignment code here
//~~. Upon button click, window ALERT appears letting user know they will be given prompts in order to determine password generated~~
// All cancels should display an alert saying password needs a response to generate password, then loop back to that same prompt

// Constructing variables for possible correct inputs for each option:
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!()/:;<>[]|~@#$%^&*_-+=";

// Next window PROMPT asks for length of password (between 8-128 characters, have them type out the number then confirm)
var lengthPrompt = function() {
  var passwordLength = window.prompt("How many characters do you want your password to have? Type a number between 8 and 128.")
  if (passwordLength >= 8 && passwordLength <= 128) {
    // log this into the password object
    console.log(passwordLength);
    // run the next prompt function;
    letterPrompt();
  } else if (passwordLength > 128) {
    alert("This is too large for the Password Generator to compute. Please try a number that is 128 or less.");
    lengthPrompt();
  } else if (passwordLength < 8) {
    alert("This is too small for a strong password. Please type in a number that is 8 or greater.");
    lengthPrompt();
  } else if (passwordLength === null || typeof passwordLength === 'string') {
    alert("You need to enter in an appropriate number. Please enter a number between 8 and 128.");
    lengthPrompt();
  };
};

// Next window prompts: character types
// 1. Include lowercase lettering? prompt

// 2. Include upercase lettering? prompt
// Possible to have 1 prompt asking for lower, upper, mixed, or none? (L, U, M, N; perhaps buttons as well)

var letterPrompt = function() {
  var passwordLetter = window.prompt("Do you want lowercase (L), uppercase (U) or mixed (M) lettering in your password? If no characters are to be from the alphabet, type none (N)")
  if (passwordLetter === "none" || passwordLetter === "N" || passwordLetter === "n") {
    alert("You have selected no alpabet characters.")
    // log this into the password object
    let passwordLetter = 0;
    console.log(passwordLetter);
    // run the next prompt function
    numericPrompt();
  } else if (passwordLetter === "lowercase" || passwordLetter === "L" || passwordLetter === "l") {
    alert("You have selected lowercase lettering only.")
    // log this into the password object
    console.log(passwordLetter);
    // run the next prompt function
    numericPrompt();
  } else if (passwordLetter === "uppercase" || passwordLetter === "U" || passwordLetter === "u") {
    alert("You have selected uppercase lettering only.")
    // log this into the password object
    console.log(passwordLetter);
    // run the next prompt function
    numericPrompt();
  } else if (passwordLetter === "mixed" || passwordLetter === "M" || passwordLetter === "m") {
    alert("You have selected a mix of uppercase and lowercase lettering.")
    // log this into the password object
    console.log(passwordLetter);
    // run the next prompt function
    numericPrompt();
  } else {
    alert("Please input a choice for your lettering in your password from the selection given. If you do not want any alphabet characters, please input 'N' for none.")
    letterPrompt();
  };
};

// 3. Include numeric characters? prompt
var numericPrompt = function() {
  var passwordNumeric = confirm("Do you want any numeric characters (numbers) in your generated password? If not, click 'Cancel'.");
  if (passwordNumeric) {
    alert("You will have numbers in your password.")
    // log this into the password object
    console.log(passwordNumeric);
    // run the next prompt function
    specialPrompt();
  } else {
    alert("You will not have numbers in your password.")
    // log this into the password object
    console.log(passwordNumeric);
    // run the next prompt function
    specialPrompt();
  };
};
// 4. Include special characters? prompt
var specialPrompt = function() {
  var passwordSpecial = confirm("Do you want any special characters in your generated password? If not, click 'Cancel'.");
  if (passwordSpecial) {
    alert("You will have special characters in your password.")
    // log this into the password object
    console.log(passwordSpecial);
    // run the next prompt function
    characterPrompt();
  } else {
    alert("You will not have special characters in your password.")
    // log this into the password object
    console.log(passwordSpecial);
    // run the next prompt function
    characterPrompt();
  };
};

// At least ONE character type should be selected before moving on! (window prompt user to try again, reload back to first prompt)
var characterPrompt = function() {
  // if (passwordLetter === "0" && passwordNumeric !== "true" && passwordSpecial !== "true") {
  //   alert("You will need at least ONE character type for your password to be generated. Please try again by clicking 'OK'.")
  //   letterPrompt();
  // } else {
  // Alert user password has been generated
  alert("Your password has been generated!")
  // };
};


// Password function runs here, make sure it is RANDOMLY generated from variables defined by user!

// Password then generates into the box above the 'generate password' button (.card-body textarea), should revert to default upon reloading page (NO localStorage!)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  alert("In order to generate your password, please answer the folowing prompts.");
  lengthPrompt();
});