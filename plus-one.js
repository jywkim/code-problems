// QUESTION
// Plus One
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// Example 1:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
//
// Example 2:
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
//
// SOLUTION
// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//
// };
var plusOne = function(digits) {
  var carry = 0;

  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + carry;

    if (i == digits.length - 1) {
      digits[i] = digits[i] + 1;
    }

    if (digits[i] == 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry == 1) {
    digits.unshift(carry);
  }

  return digits;
};
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
