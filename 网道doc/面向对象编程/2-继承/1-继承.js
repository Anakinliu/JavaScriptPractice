var MyArray = function () {};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;



var mine = new MyArray();
console.log(mine.push(1, 2, 3));
console.log(mine.length); // 3
console.log(mine instanceof Array); // true

console.log(MyArray.constructor);
console.log(mine.constructor);