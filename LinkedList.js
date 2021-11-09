/*
** Create a class with a constructor that initializes an empty array, nodes, 
** for each instance.
** Define a size getter, that returns that uses Array.prototype.length to 
** return the number of elements in the nodes array.
** Define a node getter, that returns the first element of the nodes array 
** or null if empty.
** Define a nextNode getter, that returns the last element of the nodes array 
** or null if empty.
** Define an insertAt() method, which uses Array.prototype.splice() to add 
** a new object in the nodes array, updating the next key of the previous element.
** Define two convenience methods, insertFirst() and insertLast() that use 
** the insertAt() method to insert a new element at the start or end of the 
** nodes array respectively.
** Define a getAt() method, which retrieves the element in the given index.
** Define a removeAt() method, which uses Array.prototype.splice() to remove 
** an object in the nodes array, updating the next key of the previous element.
** Create an indexOf() method similar to what arrays have.
** Create a contains() method that evaluates to true if the item exist in the list
** and false otherwise.
** Create a removeFirst() and removeLast() methos using the removeAt() method as base.
** Define a clear() method, which empties the nodes array.
** convert the LinkedList in an array with a method called toArray().
** Define a reverse() method, which uses Array.prototype.reduce() and the 
** spread operator (...) to reverse the order of the nodes array, updating 
** the next key of each element appropriately.
** Find the Kth node from the end of a linked list in one pass.
** Find the middle of a linked list in one pass.
** Check to see if a linked list has a loop.
** Define a generator method for Symbol.iterator, which delegates to the nodes 
** array's iterator using the yield* syntax.
*/

class LinkedList {
  constructor() {
    this.nodes = [];
  }

  #checkIndexOutOfBounds(index) {
    if(index < 0 || index > this.nodes.length)
      throw Error("Index out of bounds");
  }

  #isEmpty() {
    return this.nodes[0] === null;
  }

  get size() {
    return this.nodes.length;
  }

  get head() {
    return this.size ? this.nodes[0] : null;
  }

  get tail() {
    return this.size ? this.nodes[this.nodes.length - 1] : null;
  }

  insertAt(index, value) {
    this.#checkIndexOutOfBounds(index);

    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode };

    if (previousNode) previousNode.next = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    this.insertAt(0, value);
  }

  insertLast(value) {
    this.insertAt(this.size, value);
  }

  getAt(index) {
    this.#checkIndexOutOfBounds(index);
    return this.nodes[index];
  }

  removeAt(index) {
    this.#checkIndexOutOfBounds(index);
    if(this.#isEmpty()) throw Error("List is still empty");

    const previousNode = this.nodes[index - 1];
    const nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;

    return this.nodes.splice(index, 1);
  }

  indexOf(value) {
    let i = 0;
    let node = this.nodes[i] || null;

    for(i; i < this.nodes.length; i++) {
      if(node !== null) {
        if(node.value === value) return i;
        node = node.next;
      }
    }

    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  removeFirst() {
    if(this.#isEmpty()) throw Error("List is still empty");
    this.removeAt(0);
  }

  removeLast() {
    if(this.#isEmpty()) throw Error("List is still empty");
    this.removeAt(this.nodes.length - 1);
  }

  /*
  getPrevious(node) {
    let current = this.nodes[0];

    while (current !== null) {
      if (current.next === node) return current;
      current = current.next;
    }

    return null;
  }

  removeLast() {
    if(this.#isEmpty()) throw Error("List is still empty");
    let first = this.nodes[0];
    let last = this.nodes[this.nodes.length - 1]

    if(first === last) {
      first = last = null;
      return;
    }
  
    let previousNode = this.getPrevious(last);
    last = previousNode;
    last.next = null;
    this.nodes.length--;
  } 
  */

  clear() {
    this.nodes = [];
  }

  toArray() {
    return [...this.nodes].map(e => e.value);
  }

  reverse() {
    return this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
      []
    );
  }

  getKthFromTheEnd(k) {
    this.#checkIndexOutOfBounds(k);
    if(this.#isEmpty()) throw Error("List is still empty");
    if(k === 0) throw Error("Kth should be at least 1");

    let node = this.nodes[0];
    let nextNode = this.nodes[0];

    for(let i = 0; i < k - 1; i++) {
      nextNode = nextNode.next;
      //if(nextNode === null) throw Error("Kth is too large");
    }

    while(nextNode !== this.nodes[this.nodes.length - 1]) {
      node = node.next;
      nextNode = nextNode.next;
    }

    return node.value;
  }

  
  findMiddle() {
    if(this.#isEmpty()) throw Error("List is still empty");

    let node = this.nodes[0];
    let nextNode = this.nodes[0];
    const tail = this.nodes[this.nodes.length - 1];

    while(nextNode !== tail && nextNode.next !== tail) {
      nextNode = nextNode.next.next;
      node = node.next;
    }

    if(nextNode === tail) return node.value;
    else return [node.value, node.next.value];
  }

  hasLoop() {
    let slow = this.nodes[0];
    let fast = this.nodes[0];

    while(fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if(slow === fast) return true;
    }

    return false;
  }

  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}

const list = new LinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);

list.size;                      // 5
list.head.value;                // 3
list.head.next.value;           // 2
list.tail.value;                // 4
list.indexOf(3);   // 0
console.log([...list].map(e => e.value));    // [3, 2, 1, 5, 4]
console.log(list.removeAt(3));               // 5
list.getAt(1).value;            // 1
list.head.next.value;           // 1

[...list].map(e => e.value);    // [3, 1, 5, 4]

list.reverse();
[...list].map(e => e.value);    // [4, 5, 1, 3]

list.clear();
list.size; 