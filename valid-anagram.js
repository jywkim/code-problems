// QUESTION
// Valid Anagram
// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
//
// SOLUTION
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//
// };
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  var s = s.split("").sort().join("");
  var t = t.split("").sort().join("");
  return s == t;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
