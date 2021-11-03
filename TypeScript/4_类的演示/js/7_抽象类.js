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
abtract;
ass;
Knowlege;
{
    time: number;
    constructor(time, number);
    {
        this.time = time;
    }
    abstract;
    learn();
    void ;
    method();
    {
        console.log('听说读写');
    }
}
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(time, name) {
        return _super.call(this, time) || this;
    }
    Book.prototype.learn = function () {
        console.log('看书');
    };
    return Book;
}(Knowledge));
var book = new Book(12, 'JavaScript');
book.method();
book.learn();
