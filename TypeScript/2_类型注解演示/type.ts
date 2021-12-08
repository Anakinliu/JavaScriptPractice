//#region sdsd
function test(num: Number) {
     console.log('数字是: ', num);
}
//#endregion

let n = '4';
let m = 5;
test(Number(n));
test(m);
// 虽然类型不同会报错,但是仍然可以强制编译
// test(n);