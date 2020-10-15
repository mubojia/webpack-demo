import Util from '../util';
import ValuePair from '../../models/valuePair';

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

    }

    get(key) {

    }
}

export default HashTable;