/*
** Reverse a string using a stack.
*/

class Stack {
  constructor(){  
      this.items = []; 
  }

  push(item){ 
      this.items.push(item);
  }

  pop(){ 
      if(this.items.length === 0) throw Error("you should have at least one item in your stack"); 
      return this.items.pop();
  }

  isEmpty(){ 
      if(this.items.length > 0) return false;
      return true;
  }
}

function reverse(str){
  //Creates a new stack
  let stack = new Stack();
   
  let i = 0;
  let reversedStr = "";
  //Adds all the characters to the stack.
  /*
  while (i !== str.length) {
      stack.push(str.charAt(i));
      i++;
  }*/

  for(i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }

  //Creates a reversed string by popping the stack.
  while (!stack.isEmpty()) {
      reversedStr += stack.pop();
  }
  //returns the reversed string.
  return reversedStr;
}

const name = new Stack();
name.push("M");
name.push("o");
name.push("n");
name.push("t");
name.push("e");
name.push("s");
name.push("c");
name.push("o");
console.log(name);
console.log(reverse("Montesco"));