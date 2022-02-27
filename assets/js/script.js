// Assignment code here

// alphabet variables
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabetMixed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// numbers variable
var numbers = "0123456789";
// special variable
var special = "!()/:;<>[]|~@#$%^&*_-+=";
// combined variables
var numbersLower = numbers + alphabetLower;
var numbersUpper = numbers + alphabetUpper;
var numbersMixed = numbers + alphabetMixed;
var specialAlphaLower = special + alphabetLower;
var specialAlphaUpper = special + alphabetUpper;
var specialAlphaMixed = special + alphabetMixed;
var specialNumbers = special + numbers;
var specialNumbersLower = special + numbers + alphabetLower;
var specialNumbersUpper = special + numbers + alphabetUpper;
var specialNumbersMixed = special + numbers + alphabetMixed;
// blank password text
var randomPassword = "";
// array containing the data from user inputs
var passwordInfo = {
  length: 0,
  numeric: true,
  special: true,
  mix: 0,
  };
// reset box to blank when generating new password
var reset =  function() {
  randomPassword = "";
  passwordInfo.mix = 0;
};
var characterReset = function() {
  passwordLetter = "";
  passwordNumeric = true;
  passwordSpecial = true;
}

// Password function runs here, make sure it is RANDOMLY generated from variables defined by user!
var generatePassword = function() {

  reset();

  // Next window PROMPT asks for length of password (between 8-128 characters, have them type out the number then confirm)
  var lengthPrompt = function() {
    var passwordLength = window.prompt("How many characters do you want your password to have? Type a number between 8 and 128.")
    if (passwordLength >= 8 && passwordLength <= 128) {
      // log this into the password object
      passwordInfo.length = passwordLength;
      console.log(passwordInfo.length)
      // run the next prompt function;
    } else if (passwordLength > 128) {
      alert("This number is too large for an appropriate password. Please input a number that is 128 or less.");
      return lengthPrompt();
    } else if (passwordLength < 8) {
      alert("This number is too small for an appropriate password. Please type in a number that is 8 or greater.");
      return lengthPrompt();
    } else if (passwordLength === null || typeof passwordLength === 'string') {
      alert("You need to enter in an appropriate number. Please enter a number between 8 and 128.");
      return lengthPrompt();
    };
  };

  lengthPrompt();
  
  // Next window prompts: character types
  // 1. Include lowercase lettering? prompt

  // 2. Include upercase lettering? prompt
  // Possible to have 1 prompt asking for lower, upper, mixed, or none (L, U, M, N;)


  var letterPrompt = function() {

  characterReset();

    var passwordLetter = window.prompt("Do you want lowercase (L), uppercase (U) or mixed (M) lettering in your password? If no characters are to be from the alphabet, type none (N)")
    
    passwordLetter = passwordLetter.toLowerCase();
    
    if (passwordLetter === "none" || passwordLetter === "n") {
      alert("You have selected no alphabet characters.")
      // log this into the password object
      passwordInfo.mix = 0;
      console.log(passwordInfo.mix);
      // run the next prompt function
    } else if (passwordLetter === "lowercase" || passwordLetter === "l") {
      alert("You have selected lowercase lettering only.")
      // log this into the password object
      passwordInfo.mix += 1;
      console.log(passwordInfo.mix);
      // run the next prompt function
    } else if (passwordLetter === "uppercase" || passwordLetter === "u") {
      alert("You have selected uppercase lettering only.")
      // log this into the password object
      passwordInfo.mix += 2;
      console.log(passwordInfo.mix);
      // run the next prompt function
    } else if (passwordLetter === "mixed" || passwordLetter === "m") {
      alert("You have selected a mix of uppercase and lowercase lettering.")
      // log this into the password object
      passwordInfo.mix += 3;
      console.log(passwordInfo.mix);
      // run the next prompt function
    } else {
      alert("Please input a choice for your lettering in your password from the selection given. If you do not want any alphabet characters, please input 'N' for none.")
      return letterPrompt();
    };
  };

  letterPrompt();

  // 3. Include numeric characters? prompt
  var numericPrompt = function() {
    var passwordNumeric = confirm("Do you want any numeric characters (numbers) in your generated password? If not, click 'Cancel'.");
    if (passwordNumeric) {
      alert("You will have numbers in your password.")
      // log this into the password object
      passwordInfo.numeric = true;
      passwordInfo.mix += 10;
      console.log(passwordInfo.mix)
      // run the next prompt function
    } else {
      alert("You will not have numbers in your password.")
      // log this into the password object
      passwordInfo.numeric = false;
      console.log(passwordInfo.mix)
      // run the next prompt function
    };
  };

  numericPrompt();

  // 4. Include special characters? prompt
  var specialPrompt = function() {
    var passwordSpecial = confirm("Do you want any special characters in your generated password? If not, click 'Cancel'.");
    if (passwordSpecial) {
      alert("You will have special characters in your password.")
      // log this into the password object
      passwordInfo.special = true;
      passwordInfo.mix += 100;
      console.log(passwordInfo.mix)
      // run the next prompt function
    } else {
      alert("You will not have special characters in your password.")
      // log this into the password object
      passwordInfo.special = false;
      console.log(passwordInfo.mix)
      // run the next prompt function
    };
  };

  specialPrompt();

  // At least ONE character type should be selected before moving on! (window prompt user to try again, reload back to first prompt)
  var characterPrompt = function() {
      if (passwordInfo.mix === 0) {
      alert("You will need at least ONE character type for your password to be generated. Please try again by clicking 'OK'.")
      var allPrompt = function() {
        letterPrompt();
        numericPrompt();
        specialPrompt();
        characterPrompt();
      };
      allPrompt();
    } else {
    // Alert user password has been generated
    alert("Your password will now be generated!")
      };
    };

  characterPrompt();

  // options for lettering in password as defined by user
  // alphabet options
  if (passwordInfo.mix === 1) {
    for (var i = 0, n = alphabetLower.length; i < passwordInfo.length; ++i) {
      randomPassword += alphabetLower.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 2) {
    for (var i = 0, n = alphabetUpper.length; i < passwordInfo.length; ++i) {
      randomPassword += alphabetUpper.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 3) {
    for (var i = 0, n = alphabetMixed.length; i < passwordInfo.length; ++i) {
      randomPassword += alphabetMixed.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  // Number options
  if (passwordInfo.mix === 10) {
    for (var i = 0, n = numbers.length; i < passwordInfo.length; ++i) {
      randomPassword += numbers.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 11) {
    for (var i = 0, n = numbersLower.length; i < passwordInfo.length; ++i) {
      randomPassword += numbersLower.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 12) {
    for (var i = 0, n = numbersUpper.length; i < passwordInfo.length; ++i) {
      randomPassword += numbersUpper.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 13) {
    for (var i = 0, n = numbersMixed.length; i < passwordInfo.length; ++i) {
      randomPassword += numbersMixed.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  // special options
  if (passwordInfo.mix === 100) {
    for (var i = 0, n = special.length; i < passwordInfo.length; ++i) {
      randomPassword += special.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 101) {
    for (var i = 0, n = specialAlphaLower.length; i < passwordInfo.length; ++i) {
      randomPassword += specialAlphaLower.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 102) {
    for (var i = 0, n = specialAlphaUpper.length; i < passwordInfo.length; ++i) {
      randomPassword += specialAlphaUpper.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 103) {
    for (var i = 0, n = specialAlphaMixed.length; i < passwordInfo.length; ++i) {
      randomPassword += specialAlphaMixed.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 110) {
    for (var i = 0, n = specialNumbers.length; i < passwordInfo.length; ++i) {
      randomPassword += specialNumbers.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 111) {
    for (var i = 0, n = specialNumbersLower.length; i < passwordInfo.length; ++i) {
      randomPassword += specialNumbersLower.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 112) {
    for (var i = 0, n = specialNumbersUpper.length; i < passwordInfo.length; ++i) {
      randomPassword += specialNumbersUpper.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
  if (passwordInfo.mix === 113) {
    for (var i = 0, n = specialNumbersMixed.length; i < passwordInfo.length; ++i) {
      randomPassword += specialNumbersMixed.charAt(Math.floor(Math.random() * n));
    };
    return randomPassword;
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // Password then generates into the box above the 'generate password' button (.card-body textarea), should revert to default upon reloading page (NO localStorage!)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  // Upon button click, window ALERT appears letting user know they will be given prompts in order to determine password generated
  alert("In order to generate your password, please answer the folowing prompts.");
  writePassword();
});