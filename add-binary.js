// QUESTION
// Add Binary
// Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 or 0.
//
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
//
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
//
// SOLUTION
// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// var addBinary = function(a, b) {
//
// };
var addBinary = function(a, b) {
  var sumStr = "";
  var carry = 0;
  var longStr, shortStr;

  if (a.length > b.length) {
    longStr = a;
    shortStr = b;
  } else {
    longStr = b;
    shortStr = a;
  }

  longStr = longStr.split("").reverse().join("");
  shortStr = shortStr.split("").reverse().join("");

  for (var i = 0; i < shortStr.length; i++) {
    var c = parseInt(shortStr.charAt(i)) + parseInt(longStr.charAt(i)) + carry;
    if (c > 1) {
      carry = 1;
      c = c%2;
    } else {
      carry = 0;
    }

    sumStr = c + sumStr;
  }

  for (var j = shortStr.length; j <  longStr.length; j++) {
    var c = parseInt(longStr.charAt(j)) + carry;
    if (c > 1) {
      carry = 1;
      c = c%2;
    } else {
      carry = 0;
    }
    sumStr = c + sumStr;
  }
  return (carry == 1 ? carry : "") + sumStr;
};
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
