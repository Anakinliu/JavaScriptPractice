console.log(Object(null));
console.log(Object(undefined));
console.log(Object(0));
console.log(Object("sS"));
console.log(Object("sS") instanceof Object);
var x = {
    1 : 2,
    2: [2,3]
};
console.log(x instanceof Object);

// 用来判断变量是否是一个对象
function isObject(x) {
    return Object(x) === x;
}
console.log(isObject(x));
