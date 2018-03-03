// QUESTION
// Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// SOLUTION
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//
// };
var majorityElement = function(nums) {
  var map = {};
  if (nums.length === 1) {
    return nums[0]
  }
  for (var i = 0 ; i < nums.length ; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
      if (map[nums[i]] >= nums.length/2) {
        return nums[i];
      }
    }
  }
};
console.log(majorityElement([1, 4, 4, 4, 3]));
