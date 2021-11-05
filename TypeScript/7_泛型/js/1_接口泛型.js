"use strict";
var Building = /** @class */ (function () {
    function Building() {
        var _this = this;
        this.getEle = function (idx) {
            return _this.arr[idx];
        };
        this.arr = [];
        this.ele = this.arr[0];
    }
    Building.prototype.addEle = function (value) {
        this.arr.push(value);
    };
    return Building;
}());
var building = new Building();
console.log(building.getEle(0));
console.log(building.getEle(1));
building.addEle(123);
console.log(building.getEle(0));
