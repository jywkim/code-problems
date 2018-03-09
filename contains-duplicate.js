// QUESTION
// Contains Duplicate
// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//
// SOLUTION
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//
// };
var containsDuplicate = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[j] == nums[i]) {
        return true;
      }
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 4, 5]));
console.log(containsDuplicate([1, 2, 3, 3, 5]));

var containsDuplicate = function(nums) {
  nums.sort();
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1, 5, 2, 4, 3]));
console.log(containsDuplicate([1, 3, 2, 5, 3]));
