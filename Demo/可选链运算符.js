
let obj = {
    age: 99,
    [1 + 2]: 12,
    tt() {
        console.log('ttttt');
    }
}
// 需要高版本node v14 支持
console.log(obj?.age);
console.log(obj?.[1 + 2]);
