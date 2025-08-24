/**
 * ❓ Question:
 * Implement the Selection Sort algorithm in JavaScript.
 *
 * Selection Sort works by repeatedly finding the minimum element
 * from the unsorted portion of the array and swapping it with
 * the first unsorted element.
 *
 * Example:
 *   Input: [10, 2, 4]
 *   Output: [2, 4, 10]
 *
 *   Input: [7, 2, 4, 3, 1, 2]
 *   Output: [1, 2, 2, 3, 4, 7]
 *
 * Requirements:
 * - Must work with duplicate numbers
 * - Must sort the array in ascending order
 * - Must not use Array.sort()
 */

/**
 * 📝 Solution: Selection Sort
 */
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume current index is minimum
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a new minimum was found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// ✅ Example Runs
console.log(selectionSort([10, 2, 4]));          // [2, 4, 10]
console.log(selectionSort([2, 1, 2]));           // [1, 2, 2]
console.log(selectionSort([7, 2, 4, 3, 1, 2])); // [1, 2, 2, 3, 4, 7]

module.exports = selectionSort;
