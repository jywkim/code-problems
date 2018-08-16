// QUESTION
// Pascal's Triangle II
// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
// Note that the row index starts from 0.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
// Input: 3
// Output: [1,3,3,1]
//
// Follow up:
// Could you optimize your algorithm to use only O(k) extra space?
//
// SOLUTION
// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */
// var getRow = function(rowIndex) {
//
// };
var getRow = function(rowIndex) {
  if (rowIndex == 0) return [1];
  if (rowIndex == 1) return [1,1];

  var array = [1];

  for (var i = 1; i <= rowIndex; i++) {
    var prev = array[i-1];
    for (var j = 1; j < i; j++) {
      var cur = array[j] ?　array[j] : 0;
      array[j] = prev + cur;
      prev = cur;
    }
    array.push(1);
  }
  return array;
};
console.log(getRow(3));
