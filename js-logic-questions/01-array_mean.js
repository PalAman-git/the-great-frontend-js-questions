
/**
 * Implement a function mean(array) that return the mean (also known as average) of the values inside array, which is an array of numbers.
 */

function mean(array) {
    if (array.length == 0) return NaN;

    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }

    return totalSum / array.length
}
let arr = [1,2,3,4,5]
console.log(mean(arr));
