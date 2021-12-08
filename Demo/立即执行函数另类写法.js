-function () { console.log(123) }();
+function () { console.log(456) }();

console.log(1 == Number(1));
console.log(1 === Number(1));
console.log(1n == BigInt(1));
console.log(1n === BigInt(1));

// number与bigint比较时,非严格相等,是数学意义上的比较
console.log(Number(1) == BigInt(1));
console.log(Number(1) === BigInt(1));
// number类型与bigint类型不能直接混合运算
console.log();

function test(...a) {
    console.log(a);
    console.log(...a);
}

test(1, 2, 3)