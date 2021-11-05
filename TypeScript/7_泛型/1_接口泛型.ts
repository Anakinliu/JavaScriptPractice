interface Base<T> {
    arr: T[];
    ele: T;
    getEle: (idx: number) => T;
}

class Building implements Base<number> {
    arr: number[];
    ele: number;
    getEle: (idx: number) => number = (idx) => {
        return this.arr[idx];
    };
    addEle(value:number): void {
        this.arr.push(value);
    }
    constructor() {
        this.arr = [];
        this.ele = this.arr[0];
    }
}

let building = new Building();
console.log(building.getEle(0));
console.log(building.getEle(1));
building.addEle(123);
console.log(building.getEle(0));


