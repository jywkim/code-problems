// QUESTION
// Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//
// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]
//
// SOLUTION
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//
// };
var merge = function(nums1, m, nums2, n) {
  var index = 0;
  for (var i = m; i < m+n; i++) {
    nums1[i] = nums2[index];
    index++;
  }

  for (var j = 0; j < nums1.length - 1; j++) {
    for (var k = j + 1; k < nums1.length; k++) {
      if (nums1[j] > nums1[k]) {
        var temp = nums1[j];
        nums1[j] = nums1[k];
        nums1[k] = temp;
      }
    }
  }
  return nums1;
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
