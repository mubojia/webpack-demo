import Util from '../Util/Util';
import ValuePair from '../../models/ValuePair';
import LinkedList from '../LinkedList/LinkedList';

export default class HashTableSeparateChaining {
    constructor(toStrFn = Util.defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if(key != null && value != null) {
            const position = Util.hashCode(key);
            if(this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    remove(key) {
        const position = Util.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while(current != null) {
                if(current.element.key === key) {
                    linkedList.remove(current.element);
                    if(linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    get(key) {
        const position = Util.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    isEmpty(){
        return Object.keys(this.table).length == 0;
    }

    size() {
    }
    // toString() {
    //     if(this.isEmpty()) {
    //         return '';
    //     }
    //     const keys = Object.keys(this.table);
    //     let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    //     for(let i = 1; i < keys.length; i++) {
    //         objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
    //     }
    //     return objString;
    // }
}