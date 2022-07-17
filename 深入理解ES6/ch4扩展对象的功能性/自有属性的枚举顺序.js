// 1. 数字key按升序排序
// 2. 字符串key按照被加入对象的顺序排序
// 3. 所有symbol按照被加入对象的顺序排序
let obj = {
    0: 1,
    3: 1,
    bz: 1,
    b: 1,
    bb: 1,
    az: 1,
    ab: 1,
    1: 1,
    "-2": 1,
    "-1": 1
}
obj[2] = 1;
obj[-0] = 1;
obj[-1] = 1;
obj['a'] = 1;

console.log(Object.getOwnPropertyNames(obj).join('-'));
// 0-1-2-3-bz-b-bb-az-a-ab--2--1

// for-in没有被ES6规范
let res = "";
for (let k in obj) {
    res = res + "-" + k;
}
console.log(res);

console.log(Object.keys(obj));