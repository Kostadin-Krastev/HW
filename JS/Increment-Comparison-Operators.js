"use strict";
//Задача: помислете и си запишете на мястото на "?" какво ще се изпише в конзолата, а след това стартирайте скрипта и сравнете вашите отговори:
const a = 1,
  b = 1;
console.log(a++ + ++a); // a++ is (1) and then + 1 = 2; ++a = 2| the result is 2+2 = 4
console.log(++b + b++); // ++b = 2; b++ is (1) and then + 1 = 2; | the result is 2+2 = 4
console.log(a + b); // a = 1 + 2 from line 5(a++ + ++a) the result is 3; b = 1 + 2 from line 6(++b + b++) the result is 3| final result is 6

// Example:
let i = 2;

//postfix increment:
let j = i++; // j = 2, i = 3

//prefix increment:
let g = ++i; // j = 3, i = 3
