//var testData = require("C:/Users/aysel/Desktop/JavaScriptProgramming/TestData/Data.json");
// OR
var testData = require("../JavaScriptProgramming/TestData/Data.json");

console.log(testData.Name);
console.log(testData.ID);

var students = require("../JavaScriptProgramming/TestData/Students.json");
console.log(students.Aysel);  // { Name: 'Aysel Dalcicek', ID: '12', Salary: '100000' }
console.log(students.Aysel.Name); // Aysel Dalcicek

console.log(students.Zeynep);  // { Name: 'Zeynep Dalcicek', ID: '14', Salary: '150000' }

console.log(students["Aysel"]);  // { Name: 'Aysel Dalcicek', ID: '12', Salary: '100000' }
console.log(students["Aysel"]["Salary"]); // 100000
console.log(students.Aysel.Salary);  // 100000

console.log(students["Kadir"]["ID"]); // 13