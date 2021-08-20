console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve("任务成功");
        reject(new Error("出错了!"));
    }, 1000);
})
console.log("主线程2");

promise.then(
    function (result) {
        // 处理成功的结果
        console.log(result);
    },
    function (error) {
        // 处理错误
        console.log(error);
    }
)
console.log("主线程3");

// 主线程1
// 主线程2
// 主线程3
// Error: 出错了!
//     at Timeout._onTimeout 
