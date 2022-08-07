function createStack() {
    const items = []; //this will make items available only inside this function scope and not outside the function
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      },
      display()
      {console.log(items);}
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(20);
  stack.push(5);
  stack.pop(); // => 5
  stack.display() // => This will display the item value with in the scope as we are calling display function in side the createStack function.
  stack.items; // =>  this should be displaying undefined as we are trying to access items out of scope
  console.log("items = ", stack.items);