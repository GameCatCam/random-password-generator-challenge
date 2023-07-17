// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword creates the password to be displayed on the site
function generatePassword() {
  var charactersLower = "abcdefghijklmnopqrstuvwxyz"
  var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charactersNumber = "1234567890"
  var charactersSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var passWord = ""
  var characterSet = ""

  var passwordLength = window.prompt("Please input password length! \n\nNo less than 8 and no more than 128.")

  // one for lowercase
  var one = window.confirm("Would you like to include lowercase letters?")
  // two for uppercase
  var two = window.confirm("Would you like to include uppercase letters?")
  // three for numbers
  var three = window.confirm("Would you like to include numbers?")
  // four for special characters
  var four = window.confirm("Would you like to include special characters?")

  if (one) {
    characterSet = characterSet.concat(charactersLower)
  }
  if (two) {
    characterSet = characterSet.concat(charactersUpper)
  }
  if (three) {
    characterSet = characterSet.concat(charactersNumber)
  }
  if (four) {
    characterSet = characterSet.concat(charactersSpecial)
  }

  for (var i = 0; i <= passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characterSet.length)
    passWord += characterSet.substring(randomNum, randomNum + 1)
  }
  
  console.log(passWord)
}