// const op = [,,,,,];
// console.log(op.length);  // 5
// console.log(op);  // [ <5 empty items> ]

// const op = [1,,,,5];
// for (const e of op) {
//     console.log(e === undefined);
// }

// false
// true
// true
// true
// false

// ES6 新增方法普遍将这些空位当成存在的元素
// const op = Array.from([1,,,5]);  // ES6新增from方法
// for (const e of op) {
//     console.log(e === undefined);
// }

// const op = Array.of(...[1,,,5]);  // ES6新增of方法
// console.log(op);
// console.log(op.entries());
// for (const [idx, val] of op.entries()) {
//     console.log(idx, val);
// }

// ES6 之前的方法
const op =  [1,,,,5];
console.log(op);
console.log(op.map(() => 999));  // 跳过空位置
console.log(op.join('-'));  // 空位置视为空串


