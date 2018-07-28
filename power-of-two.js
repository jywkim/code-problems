// QUESTION
// Power of Two
// Given an integer, write a function to determine if it is a power of two.
//
// Example 1:
// Input: 1
// Output: true
// Explanation: 2^0 = 1
//
// Example 2:
// Input: 16
// Output: true
// Explanation: 2^4 = 16
//
// Example 3:
// Input: 218
// Output: false
//
// SOLUTION
// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfTwo = function(n) {
//
// };
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  while (n>3) {
    if (n%2 != 0) return false;
    n = parseInt(n/2);
  }
  return n%2 === 0;
};
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
