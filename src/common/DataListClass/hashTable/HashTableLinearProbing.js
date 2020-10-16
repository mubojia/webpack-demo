import Util from "../Util/Util";
import ValuePari from "../../models/ValuePair";

export default class HashTableLinearProbing {
    constructor(toStrFn = Util.defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {

            const position = Util.hashCode(key);

            if (this.table[position] == null) {
                this.table[position] = new ValuePari(key, value)
            } else {
                let index = position + 1;
                while (this.table[index] != null) {
                    index++;
                }
                this.table[index] = new ValuePari(key, value);
            }

            return true;
        }
        return false;
    }

    get(key) {
        const position = Util.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            }
            let index = position + 1;
            while(this.table[index] != null && this.table[index].key != key) {
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key) {
                return this.table[index].value;
            }

        }
        return undefined;
    }

    remove(key) {
        let position = Util.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position].value;
                this.verifyRemoveSideEffect(key, position);
                return true
            }
            let index = position + 1;
            while(this.table[index] != null && this.table[index].key != key) {
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key) {
                delete this.table[index].value;
                this.verifyRemoveSideEffect(key, index);
                return true;
            }

        }
        return false;
    }

    verifyRemoveSideEffect(key, removedPosition) {
        const hash = Util.hashCode(key);
        let index = removedPosition + 1;
        while(this.table[index] != null) {
            const posHash = Util.hashCode(this.table[index].key);
            if((posHash <= hash || posHash <= removedPosition)) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
            }
            index++;
        }
    }


}