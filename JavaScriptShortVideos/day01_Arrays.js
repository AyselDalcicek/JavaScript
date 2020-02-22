/*
decleration of array:
 var variableName = [data1, data2, ...];
 */

 var names  = [ "Aysel", "Bera", "Zeynep Meral", "Kadir"];

 console.log(names);   // [ 'Aysel', 'Bera', 'Zeynep Meral', 'Kadir' ]
 console.log(names[2]);  // Zeynep Meral
 console.log(names[4]);  // undefined


 /*
 sort()
 push(value): adds the value to the array
 pop() : Last In First Out
 shift() : First In First Out
 unshift()
 length
 */

 var numberArray = [9,8,6,5,4,7,2,0,1];
 console.log( numberArray.sort());  // sorts in ascending order

 var nums = [1,2];
 nums.push(5); // [1,2,5]
 console.log(nums);

 console.log("=============================");
 //pop()
 var nums2 =[5,6,7,8];
 console.log( nums2.pop());  // 8
 console.log(nums2);  // [ 5, 6, 7 ]
 console.log( nums2.pop());  // 7
 console.log(nums2);  // [ 5, 6 ]

 
 console.log("=============================");
//shift()
 var arr1 = ["A", "B", "C", "D"];
 console.log(arr1.shift()); // "A"
 console.log(arr1);  // [ 'B', 'C', 'D' ]
 console.log(arr1.shift());  // "B"
 console.log(arr1);  // [ 'C', 'D' ]

 console.log("=============================");
 //unshift()
 var arr2 = [9, 10, 11];
 arr2.unshift(12);
 console.log(arr2);  // [ 8, 9, 10, 11 ]

 console.log(arr2.length); // 4
