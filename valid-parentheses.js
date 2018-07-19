// QUESTION
// Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
// Input: "()"
// Output: true
//
// Example 2:
// Input: "()[]{}"
// Output: true
//
// Example 3:
// Input: "(]"
// Output: false
//
// Example 4:
// Input: "([)]"
// Output: false
//
// Example 5:
// Input: "{[]}"
// Output: true
//
// SOLUTION
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//
// };
var isValid = function(s) {
  if (!s) return true;
  var stack = [];
  var left = ['(','[','{'];
  var right = [')',']','}'];
  var match = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  for (var i in s) {
    if (left.indexOf(s[i]) > -1) {
      stack.push(s[i]);
    }
    if (right.indexOf(s[i]) > -1) {
      var stackStr = stack.pop();
      if (match[s[i]] != stackStr) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
