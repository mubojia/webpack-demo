import Util from '../Util/Util';
import ValuePair from '../../models/ValuePair';

class HashTable {
    constructor(toStrFn = Util.defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if(key != null && value != null) {
            const position = Util.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        const hash = Util.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[Util.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for(let i = 1; i < keys.length; i++) {
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

export default HashTable;