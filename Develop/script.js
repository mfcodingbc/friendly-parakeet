// Assignment code here
// Upon button click, window ALERT appears letting user know they will be given prompts in order to determine password generated
// All cancels should display an alert saying password needs a response to generate password, then loop back to that same prompt

// Next window PROMPT asks for length of password (between 8-128 characters, have them type out the number then confirm)

// Next window prompts: character types
// 1. Include lowercase lettering?

// 2. Include upercase lettering?
// Possible to have 1 prompt asking for lower, upper, mixed, or none? (L, U, M, N; perhaps buttons as well)

// 3. Include numeric characters?

// 4. Include special characters?

// At leaste ONE character type should be selected before moving on! (window prompt user to try again, reload back to first prompt)

// Password function runs here, make sure it is RANDOMLY generated from variables defined by user!

// Alert user password has been generated

// Password then generates into the box above the 'generate password' button (.card-body textarea), should revert to default upon reloading page (NO localStorage!)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
