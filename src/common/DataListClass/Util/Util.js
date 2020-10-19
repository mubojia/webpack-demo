import Deque from '../Queue/Deque';
import Queue from '../Queue/Queue';
import Stack from "../Queue/Stack";

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}
export let defaultCompare = (a, b) => {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export let loseloseHashCode = (key) => {
    if (typeof keys === 'number') {
        return key;
    }
    const tableKey = defaultToString(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
}

export let hashCode = (key) => {
    return loseloseHashCode(key)
}

export let defaultToString = (item) => {
    if (item === null) {
        return "NULL";
    } else if (item === undefined) {
        return "UNDEFINED";
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

export let defaultEquals = (a, b) => {
    return a === b;
}

// 是否回文
export let palindromeChecker = (aString) => {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        console.log(lowerString, firstChar, lastChar);
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
}

// 击鼓传花？
export let hotPotato = (elementsList, num) => {
    const queue = new Queue();
    const elimitatedList = [];

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

// 进制转换
export let decimalToBinary = (decNumber, base) => {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let number = decNumber;
    let rem;
    let binaryString = '';

    if (!(base >= 2 && base <= 36)) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()];
    }

    return binaryString;
}
