console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
    // resolve("任务成功");
    reject("出错了")
    }, 1000);
})
console.log("主线程2");

function success(result) {
    console.log("成功了");
    console.log(result);
}
function failed(error) {
    console.log("失败了");
    console.log(error.message);
}

promise.then(success)

console.log("主线程3");

