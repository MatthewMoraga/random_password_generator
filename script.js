// Assignment Code
var generateBtn = document.querySelector("#generate");


// setting up the prompts and confirms
function generatePassword() {


  var characterLength = prompt("Please Enter a Password Length from 8 - 128 characters.");
  var wantsLower = confirm("Do You Want Lower Case Letters?");
  var wantsUpper = confirm("Do You Want Upper Case Letters?");
  var wantsNumbers = confirm("Do You Want Numbers?");
  var wantsSpecial = confirm("Do You Want Special Characters?");
  var parsedAmount = parseInt(characterLength);

  // creating matching properties to the values declared with the prompts and confirms.

  var passwordOptions = {
    lowerCase: wantsLower,
    upperCase: wantsUpper,
    numbers: wantsNumbers,
    special: wantsSpecial,
    amount: parsedAmount,
  };

  // passing the passwordOptions to the options function to write logic code to get a true or false.
  
  //chaining the return from here into the passwordOptions function to return the password

  return options(passwordOptions);
  
}

// this function adds the logic to the options and randomizes the password characters

function options(passwordOptionsobject) {
  console.log(passwordOptionsobject);

  //vars for the chars that we need to randomize in arrays

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
  
  
  // sorts the values if true to be passed to password list to randomize the characters.
  var passwordChoices = [];
  var passwordChars = [];

  // this function checks itself for duplicate entries.
  var randomSelection = function(arr) {
    var random = passwordChoices[Math.floor(Math.random() * arr.length)];

    if (passwordChars.includes(random)) {
      return randomSelection(arr);
    }

    return random;
  };
  
  // creating logic for the choices the user makes to pass into the choices array and concat.
  if (passwordOptionsobject.lowerCase) {
    passwordChoices = passwordChoices.concat(lowerCase);
  }

  if (passwordOptionsobject.upperCase) {
    passwordChoices = passwordChoices.concat(upperCase);
  }

  if (passwordOptionsobject.numbers) {
    passwordChoices = passwordChoices.concat(numbers);
  }

  if (passwordOptionsobject.special) {
    passwordChoices = passwordChoices.concat(special);
  }

  // creating a formula for randomizing numbers with a for loop.

  for (var i = 0; i < passwordOptionsobject.amount; i++) {
    var random = randomSelection(passwordChoices);
    passwordChars.push(random);
  }; 

  console.log(passwordChars);

  // this returns the password into options
  // and added a join object to join the characters together
  return passwordChars.join("");
}

// Write password to the #password input.

function writePassword() {

  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  
    
  passwordText.value = password;
}
  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); 
 