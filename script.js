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

  var characterSet = x
  var passwordLength = window.prompt("Please input password length! \n\nNo less than 8 and no more than 128.")

  var goku = window.confirm("Would you like to include lowercase letters?")
  var gOku = window.confirm("Would you like to include uppercase letters?")
  var goKu = window.confirm("Would you like to include numbers?")
  var gokU = window.confirm("Would you like to include special characters?")

  if (goku == true) {
    if (gOku == true) {
      
    }
  }

  for (var i = 0; i <= passwordLength; i++) {
    var funnyTime = Math.floor(Math.random() * charactersLower.length)
    passWord += charactersLower.substring(funnyTime, funnyTime + 1)
  }
  
}