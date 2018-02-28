// QUESTION
// Reverse String
// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".
//
// SOLUTION
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseString = function(s) {
//
// };
var reverseString = function(s) {
  var newString = "";
  for (var i = s.length - 1; i >= 0; i--) {
      newString += s[i];
  }
  return newString;
}
console.log(reverseString('hello'));
