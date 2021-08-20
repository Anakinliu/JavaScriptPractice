console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    resolve("执行成功");
    reject("执行失败");
});
console.log("主线程2");
