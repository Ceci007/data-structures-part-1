/*
** Escribe una función llamada sumZero que acepta un arreglo de enteros ordenado 
** en forma creciente.
** La función deberia encontrar el primer par de elementos donde la suma es cero. 
** Devuelve un arreglo que incluya ambos valores que sumados dan cero de lo 
** contrario devuelve "undefined" si el par no existe.
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