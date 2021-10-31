function test() {
    let d: number;
    let e: boolean;
    console.log('d: ', d,'e: ',  e);

}

test();

// NOTE 严格模式下必须要赋值才可使用,
// 非严格模式,打印undefined
let a: number;
let b: string;
let c: boolean;
console.log(a);
console.log(b);
console.log(c);
