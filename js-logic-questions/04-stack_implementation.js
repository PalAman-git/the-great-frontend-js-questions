/**
 * ❓ Question:
 * Implement a Stack class in JavaScript.
 *
 * A stack is a data structure that follows the Last In First Out (LIFO) principle.
 *
 * Requirements:
 * - push(item): adds an item to the top of the stack and returns the new length
 * - pop(): removes and returns the top item (or undefined if empty)
 * - peek(): returns the top item without removing it
 * - isEmpty(): returns true if the stack is empty
 * - length(): returns the number of items in the stack
 *
 * Example:
 *   const stack = new Stack();
 *   stack.push(10); // 1
 *   stack.push(20); // 2
 *   stack.peek();   // 20
 *   stack.pop();    // 20
 *   stack.length(); // 1
 *   stack.isEmpty();// false
 */

/**
 * 📝 Solution: Stack implementation
 */
export default class Stack {
  constructor() {
    this.arr = [];
    this.currentIdx = 0;
  }

  push(item) {
    this.arr.push(item);
    this.currentIdx++;
    return this.arr.length;
  }

  pop() {
    if (this.currentIdx === 0) return undefined;
    this.currentIdx--;
    return this.arr.pop();
  }

  peek() {
    if (this.currentIdx === 0) return undefined;
    return this.arr[this.currentIdx - 1];
  }

  isEmpty() {
    return this.currentIdx === 0;
  }

  length() {
    return this.arr.length;
  }
}

/**
 * ✅ Example Runs
 */
const s1 = new Stack();
s1.push(3);                // stack = [3]
console.log(s1.length());  // 1
console.log(s1.isEmpty()); // false

console.log(s1.pop());     // 3

console.log(s1.peek());    // undefined
console.log(s1.length());  // 0
console.log(s1.isEmpty()); // true
