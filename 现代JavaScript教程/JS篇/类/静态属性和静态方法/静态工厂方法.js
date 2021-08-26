class MyDate {
    constructor(dateStr) {
        this.date = dateStr;
    }
    static createDefaultDate() {
        // 注意这里写的是this
        return new this(new Date().toString());
    }
}

let d1 = new MyDate("2021-08-26");
console.log(d1.date);
let d2 = MyDate.createDefaultDate();
console.log(d2.date);