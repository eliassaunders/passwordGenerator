// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
} 
var passwordChar = [];
function generatePassword() {
   
    var length = Number(prompt("How long would you like your password to be?"));

    var lowercase = confirm("Do you want lowercase letters in your password?");
    var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    var lowercaseLength = lowercaseCharset.length;
    var placeHold = "";

    var uppercase = confirm("Do you want uppercase letters in your password?");
    var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var uppercaseLength = uppercaseCharset.length;

    var numbers = confirm("Do you want numbers in your password?");
    var numbCharset = "123456789";
    var numbLength = numbCharset.length;

    var specChar = confirm("Do you want special characters in your password?");
    var specCharset = "/.,';][-=`:";
    var specLength = specCharset.length;
    
    if (length < 8 || length > 128) {
            alert("The password must be between 8 and 128 characters.")
        }
        //ask about making the charsets into an array that can be refrenced as one object for .charAt
    if (lowercase &&! uppercase &&! numbers &&! specChar) {
        for (var i = 0, n = lowercaseCharset.length; i < length; i++) {
            placeHold += lowercaseCharset.charAt(Math.floor(Math.random() * n));
        } return placeHold;
    }
};
console.log(passwordChar);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
