/*
- Create an array class that works similar to the JavaScript Array class itself.
- Add a capacity of 100.
- Methods: push, pop, get, set, getList, removeAt, indexOf.
- private methods: resize, checkIndexOutOfBounds.
- Bonus: Max, intersect, reverse, insertAt. 
*/

class ArrayList {
  #items;
  #capacity;

  constructor(capacity = 100) {
    if(capacity < 0)
      throw Error("Invalid argument: capacity should be at least 1");

    this.#items = Array.from(Array(capacity));
    this.#capacity = capacity;
    this.length = 0;

    if(capacity === 0)
      this.#items = [];
  }

  #resize() {
    if (this.length >= this.#capacity) {
      const newCapacity = this.#capacity * 2;
      const copy = Array.from(Array(newCapacity));
      
      for (let i = 0; i < this.#capacity; i++) {
        copy[i] = this.#items[i];
      }

      this.#capacity = newCapacity;
      this.#items = copy;
    }
  }

  #checkIndexOutOfBounds(index) {
    if(index < 0 || index >= this.length)
      throw Error("Index out of bounds");
  }

  push(item) {
    this.#resize();
    this.#items[this.length] = item;
    this.length++;
  }

  pop() {
    if(this.length === 0)
      throw Error("Not enough elements to pop");

    const removed = this.#items[this.#items.length - 1];
    this.#items[this.#items.length - 1] = undefined;
    this.#items.length--;
    this.length--; 
    return removed;
  }

  get(index) {
    this.#checkIndexOutOfBounds(index);
    return this.#items[index];
  }

  set(item, index) {
    this.#checkIndexOutOfBounds(index);
    this.#items[index] = item;
  }

  getList() {
    return this.#items;
  }

  removeAt(index) {
    this.#checkIndexOutOfBounds(index);
    for(let i = index; i < this.length; i++)
      this.#items[i] = this.#items[i + 1];

    this.#items.length--;
    this.length--;
  }

  indexOf(item) {
    for(let i = 0; i < this.length; i++)
      if(this.#items[i] === item)
        return i;

    return -1;
  }

  max() {
    let maxItem = 0;
    for(let i = 0; i < this.length; i++)
      if(this.#items[i] > maxItem)
        maxItem = this.#items[i];

    return maxItem;
  }

  intersect(other) {
    return this.#items.filter(item => other.includes(item));
  }

  reverse() {
    let newItems = Array(this.#capacity);
    for(let i = 0; i < this.#capacity; i++) {
      newItems[i] = this.#items[this.#capacity - i - 1];
    }

    return newItems;
  }

  insertAt(item, index) {
    this.#checkIndexOutOfBounds(index);
    this.#resize();

    for(let i = this.length - 1; i >= index; i--)
      this.#items[i + 1] = this.#items[i];

    this.#items[index] = item;
    this.length++;
  }
}

let list = new ArrayList(5);
console.log(list.getList());