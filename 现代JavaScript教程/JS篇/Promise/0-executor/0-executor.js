console.log("主线程1");
// 传递给 new Promise 的函数被称为 executor
let pp = new Promise(function (resolve, reject) {
    console.log("执行1");
})

console.log("主线程2");

let ppp = new Promise(function (resolve, reject) {
    console.log("执行2");
})

console.log("主线程3");
