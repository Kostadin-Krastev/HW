"use strict";
// Example - sum all numbers in the interval [1..10]:
var sum = 0;
for (var x = 1; x <= 10; x++) {
  sum += x;
}
console.log("sum = " + sum);

// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:
let y = 0;
for (let x = 1; x < numbers.length; x++) {
  if (numbers[x] > 0 && numbers[x] % 2 === 0) {
    y += numbers[x];
  }
}
// expected output: 14
console.log(y);
