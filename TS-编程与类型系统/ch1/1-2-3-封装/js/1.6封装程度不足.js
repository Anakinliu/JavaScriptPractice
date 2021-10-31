var SafeDiv = /** @class */ (function () {
    function SafeDiv() {
        this.divisor = 1;
    }
    SafeDiv.prototype.setDiv = function (v) {
        if (v === 0) {
            throw Error('除数不能是0!');
        }
        this.divisor = v;
    };
    SafeDiv.prototype.divide = function (x) {
        return x / this.divisor;
    };
    return SafeDiv;
}());
var sd = new SafeDiv();
// sd.setDiv(0);
// sd.divide(9);
// 因为divisor是公有的,对调用者是直接可见的,所以可以被直接绕过检查
sd.divisor = 0;
sd.divide(9);
