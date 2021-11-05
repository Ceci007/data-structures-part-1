/*
** Given an array of integers and a number, write a function called
** maxSubarraySum, which finds the maximun sum of a subarray with the length
** of the number passed to the function.
** A subarray must consist of consecutives elements from the original array. 
** ------------------------------------------------------------------------------
**
** input: ([100, 200, 300, 400], 2), output: 700
**
** input: ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), output: 39
**
** input: ([-3, 4, 0, -2, 6, -1], 2), output: 5
**
** input: ([2, 3], 3), output: null
*/

const maxSubarraySum = (arr, n) => {
  if(arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  for(let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }  

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([2, 3], 3));
