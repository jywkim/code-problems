// QUESTION
// Rectangle Area
//
// Example:
// Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
// Output: 45
//
// Note:
// Assume that the total area is never beyond the maximum possible value of int.
//
// SOLUTION
// /**
//  * @param {number} A
//  * @param {number} B
//  * @param {number} C
//  * @param {number} D
//  * @param {number} E
//  * @param {number} F
//  * @param {number} G
//  * @param {number} H
//  * @return {number}
//  */
// var computeArea = function(A, B, C, D, E, F, G, H) {
//
// };
var computeArea = function(A, B, C, D, E, F, G, H) {
  var r1 =  Math.abs(A-C) * Math.abs(B-D);
  var r2 =  Math.abs(E-G) * Math.abs(F-H);

  if ( A >= G || B >= H || C <= E || D <= F) {
    return r1 + r2;
  }

  var rD = Math.abs( (Math.max(A,E) - Math.min(C,G)) * (Math.max(B,F) - Math.min(D,H)) )

  return r1 + r2 - rD;
};
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
