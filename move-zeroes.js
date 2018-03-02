// QUESTION
// Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// 1. You must do this in-place without making a copy of the array.
// 2. Minimize the total number of operations.
//
// SOLUTION
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//
// };
var moveZeroes = function(nums) {
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (n !== 0) {
      nums[index++] = n;
    }
  }
  for (index; index < nums.length; index++) {
    nums[index] = 0;
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
