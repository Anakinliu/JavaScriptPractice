"use strict";
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'A';
        this.lastName = 'B';
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "" + this.firstName + this.lastName;
        },
        set: function (value) {
            var names = value.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.fullName);
person.fullName = 'Lim Tom';
console.log(person.fullName);
