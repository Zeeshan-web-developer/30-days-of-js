// node struture for  each node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node into the binary tree
  insert(data) {
    const newNode = new Node(data);

    //   if there is not a root node
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node
  insertNode(node, newNode) {
    //if root data  is 5 ,new is 10
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal (left, root, right)
  inOrderTraversal(node = this.root) {
    if (node === null) return;

    console.log("before--");
    this.inOrderTraversal(node.left);

    console.log(node.data);
    this.inOrderTraversal(node.right);
    console.log("After--");
  }

  // Pre-order traversal (root, left, right)
  preOrderTraversal(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // Post-order traversal (left, right, root)
  postOrderTraversal(node = this.root) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }

  // Find the minimum value node in the binary tree
  findMinNode(node = this.root) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // Find the maximum value node in the binary tree
  findMaxNode(node = this.root) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  // Search for a node with a given value
  search(node = this.root, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    } else {
      return this.search(node.right, data);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);

console.log("In-order Traversal:");
tree.inOrderTraversal(); // Output: 2 5 7 10 12 15 20

console.log("Pre-order Traversal:");
tree.preOrderTraversal(); // Output: 10 5 2 7 15 12 20

console.log("Post-order Traversal:");
tree.postOrderTraversal(); // Output: 2 7 5 12 20 15 10

console.log("Minimum value in tree:", tree.findMinNode().data); // Output: 2
console.log("Maximum value in tree:", tree.findMaxNode().data); // Output: 20

console.log("Search for 7:", tree.search(tree.root, 7)); // Output: Node with data 7
