var SafeDiv2 = /** @class */ (function () {
    function SafeDiv2() {
        this.divisor = 1;
    }
    SafeDiv2.prototype.setDiv = function (v) {
        if (v === 0) {
            throw Error('除数不能是0!');
        }
        this.divisor = v;
    };
    SafeDiv2.prototype.divide = function (x) {
        return x / this.divisor;
    };
    return SafeDiv2;
}());
var sd = new SafeDiv2();
// sd.setDiv(0);
// sd.divide(9);
// 直接访问private会编译报错
// 同1.6相比,编译后的代码并没有任何区别.
sd.divisor = 0;
sd.divide(9);
