//听说是字节的题目
var foo = function (...args) {
    const res = function (...aug) {
        args = args.concat(aug);
        return foo(...args);
    }
    res.getValue = function () {
        return args.reduce((a, b) => a + b, 0);
    }
    return res
}

let f1 = foo(1, 2, 3);
console.log(f1.getValue());
let f2 = foo(1)(2, 3)
console.log(f2.getValue());
let f3 = foo(1)(2)(3)(4);
console.log(f3.getValue());


// var f1 = foo(1, 2, 3);
// f1.getValue(); // 6 输出是参数的和
// var f2 = foo(1)(2, 3);
// f2.getValue(); // 6
// var f3 = foo(1)(2)(3)(4);
// f3.getValue(); // 10