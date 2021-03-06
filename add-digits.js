// QUESTION
// Add Digits
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// Example:
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
// Since 2 has only one digit, return it.
//
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?
//
// SOLUTION
// /**
//  * @param {number} num
//  * @return {number}
//  */
// var addDigits = function(num) {
//
// };
var addDigits = function(num) {
  while (num >= 10) {
    var n = num;
    var sum = 0;
    while (parseInt(n/10) > 0) {
      sum += parseInt(n%10);
      n = parseInt(n/10);
    }
    num = parseInt(n%10) + sum;
  }
  return num;
};
console.log(addDigits(38));
