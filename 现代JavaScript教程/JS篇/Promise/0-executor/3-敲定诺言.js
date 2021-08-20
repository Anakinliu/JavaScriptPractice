console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    console.log("执行");
    setTimeout(() => {
        resolve("任务成功");
        console.log("继续执行1");
        resolve("再次成功");// 忽略
        console.log("继续执行2");
    }, 1000);
    setTimeout(() => {
        reject(new Error("任务失败!"));// 忽略
        console.log("继续执行3");
        reject(new Error("再次失败!"));// 忽略
        console.log("继续执行4");
    }, 1000);
});
console.log("主线程2");

// 主线程1
// 执行
// 主线程2
// 继续执行1
// 继续执行2
// 继续执行3
// 继续执行4