import { Compare, defaultCompare } from '../Util/Util';
import { BinaryTreeNode } from '../../models/Nodes';

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }

    // 插如一个新的键
    insert(key) {
        if (this.root == null) {
            this.root = new BinaryTreeNode(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new BinaryTreeNode(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new BinaryTreeNode(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    // 通过中序遍历方式遍历所有节点
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // 通过先序遍历方式遍历所有节点
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // 通过后序遍历方式遍历所有节点
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        let current = node;
        while (current && current.left != null) {
            current = current.left;
        }
        return current.key;
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current && current.right != null) {
            current = current.right;
        }
        return current.key;
    }

    // 查找一个键，存在返回true，不存在返回false
    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
        if (node == null) {
            return false;
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    remove(key) {

    }
}