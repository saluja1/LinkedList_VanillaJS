function Node(value, next = null) {
    this.value = value;
    this.next = next;

}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  insertAtBeginning(value) { 
    // console.log(this.head)
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  insertAtEnd(value) {

    let newNode = new Node(value);


    if(this.size === 0) {
      return this.insertAtBeginning(value);
    }

    // console.log(this.head)
    
    let curr = this.head;



    while(curr.next) {
      curr = curr.next;
    }
    
    curr.next = newNode;
    this.size++;
  }

  insertAt(value, index) {
    let newNode = new Node(value);

    if((!index && index !== 0) || index < 0) {
      return;
    } else if(index === 0) {
      return this.insertAtBeginning(value);
    } else if(index >= this.size) {
      return this.insertAtEnd(value);
    }

    let counter = 1;
    let curr = this.head;
    let prev;

    console.log(this)

    while(counter < index) {

      if(counter === index - 1) {
        prev = curr;
      }

      curr = curr.next;
      counter++;
    }

    console.log(prev, curr)
    prev.next = newNode;
    newNode.next = curr;
    this.size++;
  }

  removeNodeByIndex(index) {
    if((!index && index !== 0) || index < 0) {
      return;
    } else if(index === 0) {
       this.head = this.head.next;
       this.size--;
      return;
    } else if(index > this.size) {
      index = this.size;
    } else if(this.size === 1) {
      this.head = null;
      return;
    }

    let counter = 1;
    let curr = this.head;
    let prev;

    while(counter < index + 1) {

      if(counter === index - 1) {
        prev = curr;
      }

      if(counter === index && index === this.size) {
        curr = null;
        break;
      }

      curr = curr.next;
      counter++;
    }

    prev.next = curr;
    this.size--;
  }

  getAllNodes() {
    if(this.size === 0) {
      return;
    }

    let counter = 0;
    let curr = this.head;

    while(counter <= this.size) {
      console.log(curr);
      if(curr === null) {
        break;
      }
      curr = curr.next;
      counter++;
    }
  }
}

let list = new LinkedList();


list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(40);

// console.log(list)
// console.log(list.head.value, list.head.next.value)
// list.insertAtEnd("Hello");
// list.insertAtBeginning("Original Head");
// list.getAllNodes();

// console.log("----------------------------");
list.insertAt("string",2);
list.getAllNodes();

// console.log("----------------------------");
// list.insertAt("string2",3);
// list.getAllNodes();

// console.log("----------------------------");
// list.insertAt(2000,0);
// list.getAllNodes();

// console.log("----------------------------");
// list.insertAt(true,10);
// list.getAllNodes();
// console.log(list.size);

// console.log("----------------------------");
// list.removeNodeByIndex(10);
// list.getAllNodes();
// console.log(list.size);

// console.log("----------------------------");
// list.removeNodeByIndex(0);
// list.getAllNodes();
// console.log(list.size);

// console.log("----------------------------");
// list.removeNodeByIndex(0);
// list.getAllNodes();
// console.log(list.size);

// console.log("----------------------------");
// list.removeNodeByIndex(3);
// list.getAllNodes();
// console.log(list.size);