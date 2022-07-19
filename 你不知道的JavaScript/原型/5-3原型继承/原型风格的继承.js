/*
原型风格来实现的继承
*/


function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
// 调用create会凭空创建一个新对象，并把对象内部的[[prototype]]关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.constructor = Bar;

Bar.prototype.myLabel = function () {
    return this.label;
}

const b = new Bar('I am Bar', 'Bar label');
console.log(b.myName());
console.log(b.myLabel());

// ES6 的拿到prototype的方法，可替代__proto__这个非标准属性
console.log(Object.getPrototypeOf(b) === Bar.prototype);  // true
console.log(Object.getPrototypeOf(Bar) === Function.prototype);  // true
console.log(Object.getPrototypeOf(Foo) === Function.prototype);  // true