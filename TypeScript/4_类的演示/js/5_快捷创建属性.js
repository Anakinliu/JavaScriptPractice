"use strict";
var Quick = /** @class */ (function () {
    // 不用在构造器外声明了,需要访问修饰符的话也要同时声明
    function Quick(age, name, id) {
        this.age = age;
        this.name = name;
        this.id = id;
    }
    return Quick;
}());
var q = new Quick(6665, 'ing', 1);
console.log(q.age);
