// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let current = head;
  let count = 1;
  while(current.next !== null) {
    current = current.next;
    count++;
  }
  const val = count - k;
  // console.log(val)
  let currentNode = head;
  let prev = null;
  let counter = 0;
  while (currentNode.next !== null) {
    if (counter === val) {
      prev.next = currentNode.next
    }
    prev = currentNode
    currentNode = currentNode.next;
    counter ++;

  }
}
