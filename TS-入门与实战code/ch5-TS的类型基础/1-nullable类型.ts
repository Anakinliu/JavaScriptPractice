// 严格模式下:
// let sn: string = undefined;

let n1: null = null;
// let n2: null = undefined;
// let u1: undefined = null;
let u2: undefined = undefined;

// 但是可以赋值给顶端类型
let m1: void = undefined;
let m2: any = undefined
let m3: unknown = undefined;

// let m4: void = null;  //void不能赋值null,为啥?
let m5: any = null
let m6: unknown = null;