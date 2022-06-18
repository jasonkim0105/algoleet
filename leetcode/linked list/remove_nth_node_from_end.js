// // This is an input class. Do not edit.
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function removeKthNodeFromEnd(head, k) {
//   // Write your code here.
//   let current = head;
//   let count = 1;
//   while(current.next !== null) {
//     current = current.next;
//     count++;
//   }
//   const val = count - k;
//   // console.log(val)
//   let currentNode = head;
//   let prev = null;
//   let counter = 0;
//   while (currentNode.next !== null) {
//     if (counter === val) {
//       prev.next = currentNode.next
//     }
//     prev = currentNode
//     currentNode = currentNode.next;
//     counter ++;

//   }
// }


var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
      fast = fast.next;
  }

  while (fast && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
  }
  if (!fast) {
      head = head.next
  } else {
      slow.next = slow.next.next

  }
  return head

//     let fast = head;
//     let slow = null;
//     let prev = null;
//     let count = 1;
//     while (fast !== null) {

//         if (count === n + 1) {
//             slow = head
//         }

//         if (slow) {
//             prev = slow;
//             slow = slow.next;
//         }
//         count++
//         fast = fast.next;
//     }

//     if (slow === null) return head.next;
//     prev.next = slow.next;
//     return head
};