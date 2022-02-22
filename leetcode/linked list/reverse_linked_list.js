// Given the head of a singly linked list, reverse the list, and return the reversed list.



var reverseList = function(head) {
  if (head === null || head.next === null) return head; // returns last node up call stack (does not edit)
  const tail = reverseList(head.next);
  head.next.next = head; // sets next node link to self
  head.next = null; // destroy previous link
  return tail;
};

var reverseIteratively = function(head) {
  if (head === null || head.next === null) return head; // prevent edge case
  let prev = null;
  let node = head;
  let tmp;
  while (node !== null) {
    tmp = node.next;
    node.next = prev;
    prev = node;
    node = tmp;
  }
  return prev;
};