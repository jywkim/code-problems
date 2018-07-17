// QUESTION
// Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
// SOLUTION
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//
// };
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  var result = new ListNode(null, null);
  var c = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      c.next = l2;
      l2 = l2.next;
    } else {
      c.next = l1;
      l1 = l1.next
    }
  c = c.next;
  }

  if (l1 !== null) {
    c.next = l1;
  }

  if (l2 !== null) {
    c.next = l2;
  }
  return result.next
};

var n3 = new ListNode(4, null);
var n2 = new ListNode(2, n3);
var n1 = new ListNode(1, n2);
var l1 = n1;

var n6 = new ListNode(4, null);
var n5 = new ListNode(3, n6);
var n4 = new ListNode(1, n5);
var l2 = n4;

console.log(mergeTwoLists(l1, l2));
