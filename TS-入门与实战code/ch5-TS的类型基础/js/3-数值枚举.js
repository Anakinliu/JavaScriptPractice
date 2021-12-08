"use strict";
// 直接写的就是数值型枚举,是number子类型
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
let d = Direction.Down;
console.log(d); // 1
// 可以手动设置枚举值,默认值自动是前面的+1
var Dir;
(function (Dir) {
    Dir[Dir["Up"] = 10] = "Up";
    Dir[Dir["Down"] = 11] = "Down";
    Dir[Dir["Left"] = 50] = "Left";
    Dir[Dir["Right"] = 51] = "Right";
})(Dir || (Dir = {}));
console.log(Dir.Down);
console.log(Dir.Right);
// 数值型枚举可以通过枚举的值获取枚举名称
console.log(Dir[Dir.Up]);
