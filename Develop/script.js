// Assignment code here
var generate = prompt("How many characters would you like to contain?")

if (generate < 8 || generate > 128){
 alert("Length must be 8-128 characters")
}

if (generate >= 8 && generate <= 128){



}
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
