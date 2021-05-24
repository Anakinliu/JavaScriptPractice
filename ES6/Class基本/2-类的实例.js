//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);

console.log(point.toString()); // (2, 3)

console.log(point.hasOwnProperty('x')); // true
console.log(point.hasOwnProperty('y')); // true
console.log(point.hasOwnProperty('toString')); // false
console.log(point.__proto__.hasOwnProperty('toString')); // true

// 类的所有实例共享一个原型对象
// 这也意味着，可以通过实例的`__proto__`属性为 “类” 添加方法。

var p1 = new Point(2,3);
var p2 = new Point(3,2);

console.log(p1.__proto__ === p2.__proto__);  // true

// 不建议使用 __proto__ 属性
// p1.__proto__.printName = function () { return 'Oops' };
Object.getPrototypeOf(p1).printName = function () { return 'Oops' };

console.log(p1.printName()); // "Oops"
console.log(p2.printName()); // "Oops"

var p3 = new Point(4,2);
console.log(p3.printName()); // "Oops"