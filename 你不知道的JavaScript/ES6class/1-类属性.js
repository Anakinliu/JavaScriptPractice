class Counter {
    static count = 1;
    constructor() {
        console.log('创建了!');
        Counter.count += 1;
        this.gg = 'GAME';
    }
    static showCount() {
        console.log('count is ', Counter.count);
    }
}



let c1 = new Counter()
let c2 = new Counter();
console.log(Counter.count);
console.log(Counter.hasOwnProperty('count'));
console.log(Counter.hasOwnProperty('gg'));
Counter.showCount()
