/* 
** Implement a function called "countUniqueValues", which accepts a sorted
** array, and counts the unique values in the array. There can be negatives
** numbers in the array, but it will always be sorted.
** -----------------------------------------------------------------------------
** 
** input: ([1, 2, 2, 5, 7, 7, 11, 11, 11, 17, 99]), output: 7
**
** input: ([1, 2, 3, 3, 4]), output: 4
**
** input: ([-5, -3, -3]), output: 2
*/

const countUniqueValues = (arr) => {
  if(arr.length === 0) return 0;

  let i = 0;

  for(let j = 1; j < arr.length; j++) {
      if(arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
      }
  }

  return (i + 1);
}

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 11, 11, 11, 17, 99]));
console.log(countUniqueValues([1, 2, 3, 3, 4]));
console.log(countUniqueValues([-5, -3, -3]));