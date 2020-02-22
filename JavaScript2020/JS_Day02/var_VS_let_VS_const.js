/*
var vs let vs const:
var vs let:
    var: variable name does not have to be unique
        var is global variable, even if we declear it within the block, we can still use it outside the block
   
        let: variable Name MUST be unique
            let can be local variables. if it's decleared within block we cannot access it outside block

        const: final variable
*/

var a = 100;
var a = "Muhtar";
console.log(a);  // Muhtar

let b = "Marufjon";
//let b = "Cybertek";
console.log(b);  // Marufjon

console.log("============================================");
if(true){
    var i =100;  
}
 console.log(i);  // 100  // var can never be a local variable 

 if(true){
    let j =100;  
}
 // console.log(j);  // it is a local variable --> does not print

 //for(var z = 0; z >=9; z++){  // if we declare as var it can print oustside of the block
 for(let z = 0; z >=9; z++){
}
// console.log(z); // it can not print --> because it has declared as let  

console.log("=======================================");
const gender = "Female";  // final variable like in java
   // gender = "Male";  // constant variables cannot be changed
console.log(gender);
