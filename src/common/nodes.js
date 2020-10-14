class Nodes {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class DoublyLinkedList extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

module.exports = { Nodes, DoublyLinkedList }