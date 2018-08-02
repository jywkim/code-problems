// QUESTION
// Power of Four
// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example:
// Given num = 16, return true. Given num = 5, return false.
//
// Follow up: Could you solve it without loops/recursion?
//
// SOLUTION
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var isPowerOfFour = function(num) {
//
// };
var isPowerOfFour = function(num) {
  if (num <= 0) return false;
  if (num == 1) return true;
  if (num % 2 == 1) return false;

  while (num >= 4){
    if (num % 4 != 0) return false;
    num = parseInt(num/4);
  }
  return num == 1;
};
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
