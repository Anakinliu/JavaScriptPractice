"use strict";
// 默认为public
var Access = /** @class */ (function () {
    function Access() {
        this.age = 123;
        this.name = '类';
        this.id = 999;
        // private constructor() {
        //     // 这样就无法new了
        // }
        // protected constructor() {
        //     // 这样也无法new
        // }
    }
    return Access;
}());
var acc = new Access();
console.log(acc.age);
// console.log(acc.name);
