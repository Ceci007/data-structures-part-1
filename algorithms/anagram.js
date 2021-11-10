/*
** Given two strings, write a function to determine if the second string
** is an anagram of the first. An anagram is a word, phrase or name formed
** by rearranging the letters of another, such as cinema, form from iceman.
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