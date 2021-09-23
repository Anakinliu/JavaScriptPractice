let a = {
    age: 666
}
let b = {
    nick: 'ggg'
}
b.__proto__ = a;
console.log(b.age);

//==========

function Person() {
    this.age = '999'
    this.show = function () {
        console.log(this.age);
    }
}
Person.prototype.getAge = function () { }
let p = new Person();

//============

class Dog {
    constructor() {
        this.age = 1010;
        this.s = function () {
        }
    }
    // 相当与在之前ES5的在原型上写的方法
    gg() { }
}
let d = new Dog();

//========

function iterate(obj) {
    var res = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            res.push(key + ': ' + obj[key]);
    }
    return res;
}

console.log(iterate(b));
console.log(iterate(p));
console.log(iterate(d));