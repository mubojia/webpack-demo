import util from '../util';
import ValuePair from '../../models/ValuePair';

class Dictionary {
    constructor(toStrFn = util.defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {}
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    clear() {
        this.table = {}
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    keyValues() {
        const valuePair = [];
        for (const k in this.table) {
            if (this.hasKey(k)) {
                valuePair.push(this.table[k]);
            }
        }
        return valuePair;
    }

    forEach(callbackFn) {
        const valuePair = this.keyValues();
        for(let i = 0; i < valuePair.length; i++) {
            const result = callbackFn(valuePair[i], valuePair[i].value);
            if(result === false) {
                break;
            }
        }
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        const valuePair = this.keyValues();
        let objString = `${valuePair[0].toString()}`;
        for(let i = 1; i < valuePair.length; i++){
            objString = `${objString},${valuePair[i].toString()}}`
        }
        return objString;
    }
}

export default Dictionary;