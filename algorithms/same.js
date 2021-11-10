/*
** Write a function called "same", which accepts as arguments two arrays.
** The function should return true if every value in the first array has their 
** correspondent values squared in the second array.
** The frequency should be the same.
** ------------------------------------------------------------------------------
**
** input: ([1, 2, 3], [1, 4, 9]), output: true
**
** input: ([1, 2, 3], [4, 1, 9]), output: true
**
** input: ([1, 2, 1], [4, 4, 1]), output: false
**
** input: ([1, 2, 3], [1, 9]), output: false
*/

const same = (arr1, arr2) => {
  const count1 = {};
  const count2 = {};

  for(let i = 0; i < arr1.length; i++) 
    count1[arr1[i]] = (count1[arr1[i]] || 0) + 1;

  for(let i = 0; i < arr2.length; i++)
    count2[arr2[i]] = (count2[arr2[i]] || 0) + 1;

  for(let item in count1) {
    if(!(item**2 in count2)) return false;
    if(count2[item**2] !== count1[item]) return false;
  }

  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3], [1, 9]));
