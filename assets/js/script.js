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
    var placeHold = "";

    var uppercase = confirm("Do you want uppercase letters in your password?");

    var numbers = confirm("Do you want numbers in your password?");

    var specChar = confirm("Do you want special characters in your password?");
    
   
        //ask about making the charsets into an array that can be refrenced as one object for .charAt
    if (lowercase &&! uppercase &&! numbers &&! specChar) {
        for (var i = 0, n = charsets.l.length; i < length; i++) {
            placeHold += charsets.l.charAt(Math.floor(Math.random() * n));
        } return placeHold;

    } else if (lowercase && uppercase &&! numbers &&! specChar) {
        for (var i = 0, n = lu.length; i < length; i++) {
        placeHold += lu.charAt(Math.floor(Math.random() * n));
        } return placeHold;

    } else if (lowercase && uppercase && numbers &&! specChar) {
        for (var i = 0, n = lun.length; i < length; i++) {
        placeHold += lun.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (lowercase && uppercase && numbers && specChar) {
        for (var i = 0, n = luns.length; i < length; i++) {
        placeHold += luns.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (lowercase &&! uppercase && numbers &&! specChar) {
        for (var i = 0, n = ln.length; i < length; i++) {
        placeHold += ln.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (lowercase &&! uppercase &&! numbers && specChar) {
        for (var i = 0, n = ls.length; i < length; i++) { 
        placeHold += ls.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (lowercase &&! uppercase && numbers && specChar) {
        for (var i = 0, n = lns.length; i < length; i++) {
        placeHold += lns.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (lowercase && uppercase &&! numbers && specChar) {
        for (var i = 0, n = lus.length; i < length; i++) {
        placeHold += lus.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (!lowercase && uppercase && numbers &&! specChar) {
        for (var i = 0, n = un.length; i < length; i++) {
        placeHold += un.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (!lowercase && uppercase &&! numbers && specChar) {
        for (var i = 0, n = us.length; i < length; i++) {
        placeHold += us.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (!lowercase && uppercase && numbers && specChar) {
        for (var i = 0, n = uns.length; i < length; i++) {
        placeHold += uns.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (!lowercase &&! uppercase && numbers && specChar) {
        for (var i = 0, n = ns.length; i < length; i++) {
        placeHold += ns.charAt(Math.floor(Math.random() * n));

        } return placeHold;
    } else if (!lowercase &&! uppercase &&! numbers &&! specChar) {
        alert("You must pick at least one option!");
        location.reload();
        } 
        if (length < 8 || length > 128) {
            alert("The password must be between 8 and 128 characters.");
        }
};
console.log(passwordChar);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);