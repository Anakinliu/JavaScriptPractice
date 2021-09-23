function P() {
    this.name = "LLL"
}

P.prototype.getName = function () { console.log(this.name); }

let p = new P();
console.log(p.__proto__ === P.prototype);  // true
console.log(p.__proto__ === p.constructor.prototype);  // true
console.log(p.constructor === P);  // true

console.log(P.prototype.hasOwnProperty('constructor'));

console.log('=========');

// 重写原型后的构造函数?
P.prototype = {
    getName2: function () { }
}

console.log(p.__proto__ === P.prototype);  // false
// 因为 p.__proto__ 还是指向原来的 P.prototype,
// 而此时的 P.prototype 已经被改变了指向
p.getName();  // 'LLL'

console.log(p.constructor);  // Function: P
// 因为p.constructor就是P,
// 而P的prototype属性刚刚被改变了,
// 所以不相等
console.log(p.__proto__ === p.constructor.prototype);  // false

console.log(P.prototype.hasOwnProperty('constructor'));  // false
console.log(P.prototype.hasOwnProperty('getName2'));  // true