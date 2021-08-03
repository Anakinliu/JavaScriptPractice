let obj = { age: 999, name: '路由器' };

obj + 10;

obj[Symbol.toPrimitive] = function (hint) {
    console.log(hint);
    return hint == 'string' ? this.name : this.age;
}

console.log(+obj);  // 999
console.log(obj + 10); // 1009
console.log(obj + "10"); // '99910'
// 大于,小于运算就是'number'
console.log(obj >= 10); // true
console.log(obj <= 1000);  // true

console.log();
/**
 * 使用valueOf和toString实现上述obj[Symbol.toPrimitive]方法
 */
let obj2 = {
    age: 666,
    desp: '描述',
}

obj2.toString = function () {
    return this.desp;
}

obj2.valueOf = function () {
    return this.age;
}

console.log(+obj);
console.log(obj + 10);
console.log(obj + "10");
// 大于,小于运算就是'number'
console.log(obj >= 10);
console.log(obj <= 1000);

