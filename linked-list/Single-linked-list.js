/**
 * -----Operations----
 * 1:Add at Start
 * 2:Add at End
 * 3:Add at specific location
 * 4:Delete at Start
 * 5:Delete at End
 * 6:Delete at specific location
 * 7:traverse from Start-end
 * 8:reverse linked List
 * 9:Searching Data in linked List
 * 10:Updating data in linked List
 * 11:Sorting.
 * 12: Merging two linked List
 */

// structure of node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add_at_first_location(data) {
    //first check if there is list already created
    const New_node = new Node(data);

    if (this?.head) {
      New_node.next = this.head;
      this.head = New_node;
    } else {
      this.head = New_node;
    }
    this.size++;
  }
  add_at_last_location(data) {
    //first check if there is list already created
    const New_node = new Node(data);

    if (this?.head) {
      let current = this.head;
      while (current?.next) {
        current = current.next;
      }
      current.next = New_node;
    } else {
      this.head = New_node;
    }
    this.size++;
  }
  add_at_specific_location(data, index) {
    //first check if there is list already created
    if (index < 0 || index > this.size) {
      console.log("Inavlid index");
      return;
    }

    if (index == 0) {
      this.add_at_first_location(data);
      return;
    }
    const New_node = new Node(data);

    let current = this.head;
    let count = 0;
    let previous;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    New_node.next = current;
    previous.next = New_node;

    this.size++;
  }

  delete_at_start() {
    console.log("delteting---------------------");

    if (this.size <= 0) {
      console.log("List is empty");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }
  delete_at_last() {
    //if list is empty
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    //if there is only one node
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      console.log({ current, previous });
      previous.next = null;
    }
    this.size--;
  }

  traverse_from_start_to_end() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const List = new SingleLinkedList();

// List.add_at_first_location(100);
// List.add_at_first_location(101);
// List.add_at_first_location(102);
// List.add_at_first_location(103);

List.add_at_last_location(100);
List.add_at_last_location(101);

List.add_at_last_location(102);

List.add_at_last_location(103);
List.add_at_last_location(104);

List.add_at_last_location(105);
List.add_at_last_location(106);

// List.add_at_first_location("first node");
// List.add_at_specific_location("kuch bhi", 3);

List.traverse_from_start_to_end();

// List.delete_at_start();
// List.traverse_from_start_to_end();
List.delete_at_last();
List.traverse_from_start_to_end();
