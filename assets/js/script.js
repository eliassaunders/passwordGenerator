// Assignment Code
var generateBtn = document.querySelector("#generate");

var charsets = {
    l:"abcdefghijklmnopqrstuvwxyz",
    u:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    n: "123456789",
    s: "!@#$%^&*()"
};

    var lu = charsets.l + charsets.u;//
    var lun = charsets.l + charsets.u + charsets.n;//
    var ln = charsets.l + charsets.n;//
    var lns = charsets.l + charsets.n + charsets.s;//
    var ls = charsets.l + charsets.s;//
    var lus = charsets.l + charsets.u + charsets.s; //
    var luns = charsets.l + charsets.u + charsets.n + charsets.s;//
    var un = charsets.u + charsets.n;//
    var us = charsets.u +charsets.n;//
    var uns = charsets.u + charsets.n + charsets.s; //
    var ns = charsets.n + charsets.s;
    
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

    var specChar = confirm("Do you want special characters in your password?");
    
   
        //ask about making the charsets into an array that can be refrenced as one object for .charAt
    if (lowercase &&! uppercase &&! numbers &&! specChar) {
        for (var i = 0, n = charsets.l.length; i < length; i++) {
            placeHold += charsets.l.charAt(Math.floor(Math.random() * n));
        } return placeHold;

    if (lowercase &&! uppercase &&! numbers &&! specChar) {
        for (var i = 0;  i < length; i++ ) {
            placeHold += lowercaseCharset.charAt(Math.floor(Math.random() * lowercaseLength));
        } 
        return placeHold;
    } else if (!lowercase && uppercase &&! numbers &&! specChar) {
        for (var i = 0; i < length; i++) {
            placeHold += uppercaseCharset.charAt(Math.floor(Math.random() * uppercaseLength));
        }
        return placeHold;
    } else if (!lowercase &&! uppercase && numbers &&! specChar) {
        for (var i = 0; i < length; i++) {
            placeHold += numbCharset.charAt(Math.floor(Math.random() * numbLength));
        }
        return placeHold;
    } else if (!lowercase &&! uppercase &&! numbers && specChar) {
        for (var i = 0; i < length; i++) {
            placeHold += specCharset.charAt(Math.floor(Math.random() * numbLength));
        }
        return placeHold;
    }

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
