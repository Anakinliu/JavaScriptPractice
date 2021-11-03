"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Basic = /** @class */ (function () {
    function Basic() {
        this.age = 9;
    }
    Basic.prototype.say = function () {
        console.log('Basic ', this.age);
    };
    Basic.prototype.getAge = function () {
        return this.age;
    };
    return Basic;
}());
var More = /** @class */ (function (_super) {
    __extends(More, _super);
    function More() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 2022;
        return _this;
    }
    More.prototype.say = function () {
        console.log('More ', this.time);
    };
    More.prototype.date = function () {
        console.log(this.time + " + " + _super.prototype.getAge.call(this));
    };
    return More;
}(Basic));
var t = new More();
t.say();
