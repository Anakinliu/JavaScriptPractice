class NB {
    constructor(date) {
        this.date = date;
    }
}

let c = new NB(Date());

console.log(c);
console.log(Object[Symbol.hasInstance](c));