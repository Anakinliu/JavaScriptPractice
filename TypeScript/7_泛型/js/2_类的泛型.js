"use strict";
// 定义类时,为类的属性或者方法定义泛型类型,创建类的实例时,指定特定类型
var G = /** @class */ (function () {
    function G() {
        this.add = function (x, y) {
            var res = x;
            // return x + y;
            return res;
        };
    }
    return G;
}());
