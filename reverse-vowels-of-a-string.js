// QUESTION
// Reverse Vowels of a String
// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Given s = "hello", return "holle".
//
// Example 2:
// Given s = "leetcode", return "leotcede".
//
// Note:
// The vowels does not include the letter "y".
//
// SOLUTION
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function(s) {
//
// };
var reverseVowels = function(s) {
  var vowels = [];

  for (var i = 0; i < s.length; i++) {
    if ((/^[aeiou]$/i).test(s[i])) {
      vowels.push(s[i]);
    }
  }

  var v = vowels.length - 1;
  var sArray = s.split("");

  for (var j = 0; j < sArray.length; j++) {
    if ((/^[aeiou]$/i).test(sArray[j])) {
      sArray[j] = vowels[v--];
    }
  }

  return sArray.join("");
};
console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
