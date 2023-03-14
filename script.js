// Password Generator
// Assignment Code
console.log(document);
var generateBtn = document.querySelector("#generate");
var length;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*?";
var choicesString = "";
// Write password to the #password input
function writePassword() {
  generatePrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) passwordText.value = password;
}

// function generatePassword() {}

function generatePassword() {
  if (!choicesString) return;
  var newPassword = "";
  for (var i = 0; i < length; i++) {
    var randomChar =
      choicesString[Math.floor(Math.random() * choicesString.length)];
    newPassword = newPassword + randomChar;
  }
  console.log(newPassword);
  return newPassword;
}

function generatePrompt() {
  choicesString = "";
  length = prompt("How many characters for passsword? Between 8 and 128", 8);
  console.log(length);

  if (length < 8 || length > 128) {
    alert("Please select a password length between 8 and 128");
  } else {
    console.log(length);

    if (confirm("Would you like to include lowercase letters")) {
      choicesString = choicesString.concat(lowerCase);
      console.log(choicesString);
    }
    if (confirm("Would you like to include Uppercase letters")) {
      choicesString = choicesString.concat(upperCase);
      console.log(choicesString);
    }
    if (confirm("Would you like to include numbers")) {
      choicesString = choicesString.concat(numbers);
      console.log(choicesString);
    }
    if (confirm("Would you like to include special characters")) {
      choicesString = choicesString.concat(special);
      console.log(choicesString);
    }
    console.log(choicesString);
  }
}
console.log(choicesString);
// Make sure to include return funtion

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
