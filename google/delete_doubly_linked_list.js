// 1. Define the interface for nodes in a doubly linked list where each node contains a string value.
// Write a function taking the first node in such a list and a set of strings, which removes all instances of those strings from the linked list and returns the head node of the new list.

// “dog” <-> “cat” <-> “fox”, {“cat”}
// becomes
// “dog” <-> “fox”


// “dog” <-> “cat” <-> “fox” <-> "turtle", {“cat”, "dog"}
// becomes
// “fox” <-> "turtle"

// {value: "dog", next: ###(address of cat), prev: ###(null)}
// {value: "cat", next: ###(address of fox), prev: ###(address of dog)}
// {value: "fox", next: ###(null), prev: ###(address of cat)}

//if value of a node is not a string, if value is not a string set something to be returned
//make sure if removing from the front, we're changing the head and appropriate next values,
//if removing from tail, change the prev and next accordingly
//if the set of words is empty, just return whole list immediately
//make sure the set always contains strings
//make sure linked list is doubly linked list
//if linked list is empty, return a specific value


function deleteDoublyList(head, stringsToRemove) {
  let current = head;
  let prevNode = null;
  let nextNode = current.next;

  while (current.next !== null){
    if (set.has(current.val)){
      if (prevNode === null) {
        nextNode.prev = null;
        prevNode.next = currentNode.next
        head = currentNode.next
      } else if (nextNode === null) {
        prevNode.next = null;
        nextNode.prev = currentNode.prev
      } else {
        prevNode.next = currentNode.next;
        nextNode.prev = currentNode.prev;
      }

    } else {
      prevNode = current.prev;
      current = current.next;
      nextNode = current.next;
    }
  }
  return head
}

