import Util from "../../common/DataListClass/Util/Util";
export default class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.hashCode = Util.hashCode(key);
    }

    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}