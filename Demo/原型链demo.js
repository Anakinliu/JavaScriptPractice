// 父类
function F() {
    this.fName = 'FFF'; // 父类属性
}
F.prototype.sayName = function () { // 父类原型方法
    return this.name;
};

// 子类
function S() {
    this.subName = "SSS"; // 子类属性
};

let s1 = new S();

S.prototype = new F(); // 重写原型对象，代之以一个新类型的实例

// 这里实例化一个 SuperType 时， 实际上执行了两步
// 1，新创建的对象复制了父类构造函数内的所有属性及方法
// 2，并将原型的 __proto__ 指向了父类的原型对象，即S.prototype.__proto__ === F.prototype

// 在子类原型上定义方法,父类的原型上并没有此方法
S.prototype.saySubName = function () { 
    console.log(this.subName);
}

let s2 = new S();
console.log(s1.__proto__ === s2.__proto__);

let f1 = new F();
f1.saySubName();
