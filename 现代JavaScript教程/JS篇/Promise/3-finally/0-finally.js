console.log("主线程1");

let promise = new Promise(function (resolve, reject) {
    console.log("任务 1 要执行了");
    setTimeout(() => {
        // resolve("我是任务 1 成功执行后的结果");
        reject("出错了");
    }, 1000);
})

console.log("主线程2");

promise.finally(function () {
    console.log("清理任务 1 占用的系统资源");
}).then(
    function (result) {
        // 继续处理上一个promise的结果
        console.log("pormise 1 的then的任务成功处理函数: " + result);
        console.log("pormise 1 的then的任务成功处理函数处理完毕");

    },
    function (error) {
        console.log(error);
    })

console.log("主线程3");

