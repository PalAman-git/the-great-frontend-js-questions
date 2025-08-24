/**
 * ❓ Problem: Implement a Queue
 *
 * A queue is a linear data structure that follows the FIFO (First In First Out) principle.
 * Implement the following operations:
 *
 * - enqueue(item): Add an item to the end of the queue
 * - dequeue(): Remove and return the item from the front of the queue
 * - front(): Get the value at the front of the queue
 * - back(): Get the value at the back of the queue
 * - isEmpty(): Check whether the queue is empty
 * - length(): Get the number of elements in the queue
 *
 * Example:
 * const q = new Queue();
 * q.enqueue(1);  // [1]
 * q.enqueue(2);  // [1, 2]
 * q.enqueue(3);  // [1, 2, 3]
 * q.dequeue();   // returns 1, queue is [2, 3]
 * q.front();     // returns 2
 * q.back();      // returns 3
 * q.length();    // returns 2
 */

/**
 * Node class represents a single element in the doubly linked list
 */
class Node {
  constructor(value) {
    this.value = value;   // Store the value of the node
    this.next = null;     // Pointer to the next node
    this.prev = null;     // Pointer to the previous node
  }
}

export default class Queue {
  constructor() {
    // Dummy head and tail nodes to simplify edge cases
    this._dummyHead = new Node();
    this._dummyTail = new Node();

    // Connect head and tail
    this._dummyHead.prev = this._dummyTail;
    this._dummyTail.next = this._dummyHead;

    this._length = 0; // Track number of items in queue
  }

  /**
   * Add a new item to the back of the queue
   */
  enqueue(item) {
    const node = new Node(item);

    // Get the current first real node after dummyTail
    const prevLast = this._dummyTail.next;

    // Re-link pointers to insert new node
    prevLast.prev = node;
    node.next = prevLast;
    node.prev = this._dummyTail;
    this._dummyTail.next = node;

    this._length++;
    return this._length;
  }

  /**
   * Remove and return the front item of the queue
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    // The node before dummyHead is the front of queue
    const node = this._dummyHead.prev;
    const newFirst = node.prev;

    // Re-link dummyHead to new front
    this._dummyHead.prev = newFirst;
    newFirst.next = this._dummyHead;

    // Clear removed node’s pointers
    node.prev = null;
    node.next = null;

    this._length--;
    return node.value;
  }

  /**
   * Check if the queue is empty
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Get the value at the front of the queue
   */
  front() {
    if (this.isEmpty()) return undefined;
    return this._dummyHead.prev.value;
  }

  /**
   * Get the value at the back of the queue
   */
  back() {
    if (this.isEmpty()) return undefined;
    return this._dummyTail.next.value;
  }

  /**
   * Get the number of items in the queue
   */
  length() {
    return this._length;
  }
}

// Example usage / test cases
const q = new Queue();

console.log(q.enqueue(1)); // 1
console.log(q.enqueue(8)); // 2
console.log(q.enqueue(6)); // 3
console.log(q.enqueue(2)); // 4
console.log(q.dequeue());  // 1
console.log(q.dequeue());  // 8
console.log(q.front());    // 6
console.log(q.back());     // 2
console.log(q.length());   // 2
