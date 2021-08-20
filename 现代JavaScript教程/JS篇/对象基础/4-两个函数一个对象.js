function A() {
    // 只要是在两个函数之外可访问的对象都可以.
    return globalThis;
}
function B() {
    return globalThis;
}
let a = new A;
let b = new B;
console.log(a == b); // true