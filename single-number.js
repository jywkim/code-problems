// QUESTION
// Single Number
// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// SOLUTION
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//
// };
var singleNumber = function(nums) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
      result ^= nums[i];
  }
  return result;
};
console.log(singleNumber([1, 1, 2, 2, 3, 4, 4, 5, 5]));
