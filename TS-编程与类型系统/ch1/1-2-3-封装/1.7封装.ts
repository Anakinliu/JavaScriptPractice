class SafeDiv2 {
    private divisor: number = 1;
    setDiv(v: number) {
        if (v === 0) {
            throw Error('除数不能是0!')
        }
        this.divisor = v;
    }
    divide(x:number) {
        return x / this.divisor;
    }
}

let sd = new SafeDiv2();
// sd.setDiv(0);
// sd.divide(9);

// 直接访问private会编译报错
// 同1.6相比,编译后的代码并没有任何区别.
sd.divisor = 0;
sd.divide(9)