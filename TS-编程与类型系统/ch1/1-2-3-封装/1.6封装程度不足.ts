class SafeDiv {
    divisor: number = 1;
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

let sd = new SafeDiv();
// sd.setDiv(0);
// sd.divide(9);

// 因为divisor是公有的,对调用者是直接可见的,所以可以被直接绕过检查
sd.divisor = 0;
sd.divide(9)