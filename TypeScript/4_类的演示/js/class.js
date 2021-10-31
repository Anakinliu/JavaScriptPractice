"use strict";
var School = /** @class */ (function () {
    function School(student) {
        this.id = 10010;
        this.students = [student];
        this.desc = '高中';
    }
    School.prototype.log = function () {
        console.log(this.students[0]);
    };
    School.country = '中国';
    return School;
}());
// School.contry:string = '中国'
var p = {
    age: 5,
    brithday: new Date,
};
var univercity = new School(p);
univercity.log();
