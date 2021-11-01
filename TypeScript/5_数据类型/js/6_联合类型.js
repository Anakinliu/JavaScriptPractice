// 联合类型,可以取值的类型为多种类型任一
var func = function (a) {
    a = String(a);
    return a.length > 3;
};
console.log(func(123));
console.log(func('sdsdsd'));
