/*
methods in Java:
access-modifier specifier return-type methodName(parameter(s)){
    statements;
}

methods in JavaScripts:
functions:
    functions functionsName(parameters){
        statements
    }

*/

function addNums(num1, num2){
    let result = num1+num2;
    console.log(result);
}

// function addNums(num1, num2, num3){  // JavaScript does not support overloding method
//     let result = num1+num2+num3;
//     console.log(result);
// }


addNums(10,20);  // 30
//addNums(10,20,30); // 60

// return functions
console.log("======return functions======");

function MultipleTwoNums(num1, num2){
    return num1*num2;
}

console.log(MultipleTwoNums(10,20));


function concatTwoWords(str1, str2){
    return str1+" "+str2;
}

console.log(concatTwoWords("Cybertek", "School"));