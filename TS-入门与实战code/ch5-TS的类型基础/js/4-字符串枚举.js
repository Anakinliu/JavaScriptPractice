"use strict";
// 字符串枚举不同于数值枚举,需要每个都手抖赋值
var Direction;
(function (Direction) {
    Direction["U"] = "Up";
    Direction["D"] = "Down";
    Direction["L"] = "Left";
    Direction["R"] = "Right";
    Direction["Z"] = "Up";
})(Direction || (Direction = {}));
let dd = Direction.U;
console.log(dd);
console.log(Direction.Z);
// 字符串枚举类型是字符串类型子类型,可以对string类型赋值
let ssd = dd;
console.log(ssd);
// 与数值型枚举不同,字符串枚举不能通过枚举值获取枚举名称
console.log(Direction[Direction.U]);
