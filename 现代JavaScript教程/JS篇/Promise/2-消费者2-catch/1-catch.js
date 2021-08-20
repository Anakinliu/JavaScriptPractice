console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve("任务成功");
        reject("出错了");
    }, 1000);
})
console.log("主线程2");

// 只能消费reject
promise.catch(console.log);

console.log("主线程3");

