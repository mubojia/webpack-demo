class Set {
    constructor() {
        this.items = {}
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length;
    }

    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    union(otherSet) {
        const unionSet = new Set;

        this.values().forEach(value => 
            unionSet.add(value)
        );

        otherSet.values().forEach(value => 
            unionSet.add(value)
        );
        
        return unionSet;
    }
}

export default Set;