// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var numbers = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
function generatePassword(){
  var result = "";
  //ask the user how many characters they want
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128");
    return generatePassword()
  }
  //ask the user if they want to include lower, upper, speical or number?
  var Special = confirm("Would you like to inclue Special?");
  var hasNumbers = confirm("Would you like to inclue numbers?");
  var hasUpper = confirm("Would you like to include Uppercase letters?");
  var hasLower = confirm("Would you like to include Lowercase letters?");

  if(!hasUpper&&!hasLower&&!hasNumbers&&!Special){
    alert("You must at least choose 1 character type!");
    return generatePassword()
  }

  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(Special) {
    chosenCharacters += special
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}