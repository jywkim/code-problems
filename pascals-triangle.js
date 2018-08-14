// QUESTION
// Pascal's Triangle
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
//
// SOLUTION
// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function(numRows) {
//
// };
var generate = function(numRows) {
  if (numRows == 0) return [];

  var triangle = [[1]];

  for (var i = 1; i < numRows; i++) {
    var prevRow = triangle[i-1];
    var curRow = [1];

    for (var j = 1; j <= i; j++) {
      var pre = prevRow[j-1];
      var cur = prevRow[j] ? prevRow[j] : 0;
      curRow.push(pre+cur);
    }
    triangle.push(curRow);
  }

  return triangle;
};
console.log(generate(5));
