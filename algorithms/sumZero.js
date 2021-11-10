/*
** Write a function called "sumZero", which accepts a sorted array of integers.
** The function should find the first pair of elements where the sum is zero.
** Return an array which includes both values, otherwise return "undefined" if
** the pair doesn't exist. 
** ---------------------------------------------------------------------------------
**
** input: [-4, -3, -2, -1, 0, 1, 2, 5], output: [-2, 2]
**
** input: [-2, 0, 1, 3], output: undefined
**
** input: [1, 2, 3], output: undefined
*/

const sumZero = arr => {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0)
      return sum = [arr[left], arr[right]];
    else if (sum > 0) 
      right--;
    else 
      left++;
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));