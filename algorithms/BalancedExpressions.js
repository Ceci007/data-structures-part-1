/*
** Given a string containing brackets, determine if all brackets have a 
** matching counterpart. If all brackets in the string form balanced pairs, 
** return true. If not, return false.
** ----------------------------------------------------------------------------
**
** input: "([]{})", output: true
**
** input: "([{])", output: false
**
** input: "([{>])", output: false
**
** input: ")(", output: false
**
** input: "([])", output: true
*/

const isBalanced = (input) => {
  const brackets = "[]{}()<>";
  const stack = [];

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);

    if(bracketsIndex === -1) continue;

    if(bracketsIndex % 2 === 0)
      stack.push(bracketsIndex + 1);
    else 
      if(stack.pop() !== bracketsIndex) return false;
  }

  return stack.length === 0;
}

console.log(isBalanced("([]{})"));
console.log(isBalanced("([{])"));
console.log(isBalanced("([{>])"));
console.log(isBalanced(")("));
console.log(isBalanced("([])"));