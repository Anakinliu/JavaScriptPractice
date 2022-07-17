// 函数有返回对象时，new表达式使用此返回对象
function A() {
    return { k: 'value' }
}

let a = new A();
console.log(a);
// 没有[[Prototype]]连接
console.log(a.__proto__ === Object.prototype);  // true


function B() {
    this.k = 'value';
}

let b = new B();
console.log(b);
console.log(b.__proto__ === B.prototype);  // true