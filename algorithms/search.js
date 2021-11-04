/*
** given an ascendingly ordered array of integers, write a function called search,
** which accepts a value and an array and returns the position (index) where the 
** value is located inside the arrangement for the first time.
** If the value is not within the array, it returns -1.
** ----------------------------------------------------------------------------------
** 
** input: (6, [1, 2, 3, 5, 6, 8, 9, 17, 20, 29]), output: 4
**
** input: (3, [1, 2, 3, 4, 5]), output: 2
**
** input: (13, [1, 2, 3, 4, 5]), output: -1
*/

const search = (value, arr) => {
  for(let i = 0; i < arr.length; i++) 
    if(arr[i] === value)
      return i;

  return -1;
}

console.log(search(6, [1, 2, 3, 5, 6, 8, 9, 17, 20, 29]));
console.log(search(3, [1, 2, 3, 4, 5]));
console.log(search(13, [1, 2, 3, 4, 5]));
