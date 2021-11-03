"use strict";
var A = /** @class */ (function () {
    // 构造器中使用的属性必须在类中声明,就像Java一样
    function A() {
        this.age = 123;
        this.id = 123;
    }
    A.prototype.log = function () {
        console.log("\u5E74\u9F84" + this.age + ",ID:" + this.id);
    };
    return A;
}());
var a = new A();
a.log();
