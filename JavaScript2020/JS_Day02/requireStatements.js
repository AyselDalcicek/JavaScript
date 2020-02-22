/*

require: plays role of import statement in java

*/

// absulate path
//var logIn =  require("C:/Users/aysel/Desktop/JavaScript2020/JS_Day02/Pages/LogInPage.js");

// relative path
var logIn = require("../JS_Day02/Pages/LogInPage.js") 
console.log( logIn.username);  // This is username element  
console.log(logIn.password);  // This is password element

// If I did not use this keyword in LogInPage, we can not print, even we can not see as option username
// this keyword --> refers to obj instance