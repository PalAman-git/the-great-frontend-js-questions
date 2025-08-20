/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */

export default function mean(array) {
  if(array.length == 0) return NaN;

  let totalSum = 0;
  for(let i=0;i<array.length;i++){
    totalSum += array[i];
  }


  return totalSum/array.length
}