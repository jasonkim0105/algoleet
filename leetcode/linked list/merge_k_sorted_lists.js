/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  let nums = [];
  for (let linkedList of lists) {
      while (linkedList !== null) {
          nums.push(linkedList.val)
          linkedList = linkedList.next;
      }
  }
  let dummyHead = new ListNode(null)
  let head = dummyHead;
  nums.sort((a,b) => a - b);
  for (let num of nums) {
      dummyHead.next = new ListNode(num);
      dummyHead = dummyHead.next
  }

  return head.next
};