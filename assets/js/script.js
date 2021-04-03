// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
}
function generatePassword() {
    var length = Number(prompt("How long would you like your password to be?"));

    var letters = confirm("Do you want letters in your password?");
    var letterCharset = "abcdefghijklmnopqrstuvwxyz";
    var letterLength = letterCharset.length;
    var placeHold = "";

    var numbers = confirm("Do you want numbers in your password?");
    var numbCharset = "123456789";
    var numbLength = numbCharset.length;

    var specChar = confirm("Do you want special characters in your password?");
    var specCharset = "/.,';][-=`:";
    var specLength = specCharset.length;
    
    if (length < 8 || length > 128) {
            alert("The password must be between 8 and 128 characters.")
        }

    if (letters &&! numbers &&! specChar) {
        for (var i = 0;  i < length; i++ ) {
            placeHold += letterCharset.charAt(Math.floor(Math.random() * letterLength));
        } 
        return placeHold;
    } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
