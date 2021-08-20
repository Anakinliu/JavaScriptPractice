var foo = function (...args) {
    if (args.length === 0) {
        return args.reduce((a, b) => a + b, 0);
    }
    function res(...aug) {
        if (aug.length === 0) {
            return args.reduce((a, b) => a + b, 0);
        } else {
            args = args.concat(aug);
            return res
        }

    }
    return res
}
setInter
console.log(foo());
console.log(foo(1)());
console.log(foo(1, 2)());
console.log(foo(1, 2)(3)());
console.log(foo(1, 2)(3)(4, 5)());