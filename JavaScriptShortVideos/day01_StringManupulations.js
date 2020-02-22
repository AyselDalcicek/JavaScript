/*
concat()
toLoverCase()
toUpperCase()
trim()
indexOf()
substring()
startsWith()
endsWith()
cahrAt()
lenth
*/

var str = "        Cybertek";
str = str.concat(" School");

console.log(str);

str = str.trim();
console.log(str);

console.log(str.startsWith('C'));  // true
console.log(str.startsWith('Z'));  // false

console.log(str.substring(1, 3));  // yb
console.log(str.substring(0));  // Cybertek School

console.log(str.charAt(2));  // b

console.log(str.length);  // 15
