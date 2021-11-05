/*
** dadas dos cadenas de texto, escribe una función para determinar si 
** la segunda cadena de texto es un anagrama de la primera.
** un anagrama es una palabra, frase, o nombre formado reacomodando 
** las letras de la otra, como "quieren", formada desde "Enrique".
** ------------------------------------------------------------------------
** input: ('', ''), output: true
**
** input: ('aaz', 'zza'), output: false
**
** input: ('anagram', 'nagaram'), output: true
**
** input: ('rat', 'car'), output: false
**
** input: ('awesome', 'awesom'), output: false
*/

const anagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  const search = {};

  for(let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    search[letter] ? search[letter]++ : search[letter] = 1;
  }

  for(let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if(!(search[letter])) return false;
    else 
      search[letter]--;
  }

  return true;
}

console.log(anagram('', ''));
console.log(anagram('aaz', 'zza'));
console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('awesome', 'awesom'));