// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	while (currentNode !== null) {
		let nextNode = currentNode.next;
		while(nextNode !== null && nextNode.value === currentNode.value) {
			nextNode = nextNode.next;
		}
		currentNode.next = nextNode;
		currentNode = nextNode;
	}

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
