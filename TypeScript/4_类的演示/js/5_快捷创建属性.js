"use strict";
var Quick = /** @class */ (function () {
    // 不用在构造器外声明了,访问修饰符也要声明
    function Quick(age, name) {
        this.age = age;
        this.name = name;
    }
    return Quick;
}());
var q = new Quick(6665, 'ing');
console.log(q.age);
