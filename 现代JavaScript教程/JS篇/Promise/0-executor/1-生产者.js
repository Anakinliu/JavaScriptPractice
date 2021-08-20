console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    // 当 promise 被构造完成时，自动执行此函数
    console.log("executor 被立即调用");

    // 1000ms后发出任务完成信号,成功结果value为"成功完成"
    setTimeout(() => {
        resolve("成功完成");
    }, 1000)
})

console.log("主线程2");

// 主线程1
// executor 被立即调用
// 主线程2