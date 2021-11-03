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
var Human = /** @class */ (function () {
    function Human(weight) {
        this.weight = weight;
    }
    Human.prototype.eat = function () {
        console.log('human eat');
    };
    Human.prototype.move = function () {
        console.log('human move');
    };
    return Human;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(weight) {
        return _super.call(this, weight) || this;
    }
    Programmer.prototype.program = function () {
        console.log('programmer is programming');
    };
    // 支持重写
    Programmer.prototype.eat = function () {
        console.log('no eat');
        return 2;
    };
    return Programmer;
}(Human));
var me = new Programmer(99);
me.program();
me.move();
me.eat();
