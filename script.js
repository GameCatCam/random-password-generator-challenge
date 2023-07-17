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
  
  //This while loop verifies that the password length falls within accepted parameter
  var passwordLength = window.prompt("Please input password length! \n\nNo less than 8 and no more than 128.")
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a password length within accepted parameters!")
    var passwordLength = window.prompt("Please input password length! \n\nNo less than 8 and no more than 128.")
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
  }  

  // This while loop verifies that at least one character set is chosen for the password
  while (true) {
    // one for lowercase
    var one = window.confirm("Would you like to include lowercase letters?")
    // two for uppercase
    var two = window.confirm("Would you like to include uppercase letters?")
    // three for numbers
    var three = window.confirm("Would you like to include numbers?")
    // four for special characters
    var four = window.confirm("Would you like to include special characters?")
    if (one || two || three || four) {
      break;
    } else {
      alert("Please pick at least one character set for your password!")
    }
  }

  // These if statements concatenates the individual character sets into one master set.
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

  // This for loop generates the password
  for (var i = 1; i <= passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characterSet.length)
    passWord += characterSet.substring(randomNum, randomNum + 1)
  }

  // This return declares the output of the function, which is the password we have generated
  return (passWord)
}