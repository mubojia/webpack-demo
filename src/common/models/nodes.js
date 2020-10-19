class Nodes {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class BinaryTreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class DoublyLinkedList extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

module.exports = { Nodes, BinaryTreeNode, DoublyLinkedList }