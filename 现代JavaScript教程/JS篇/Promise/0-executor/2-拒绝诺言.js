console.log("主线程1");
let promise = new Promise(function (resolve, reject) {
    console.log("执行了");

    setTimeout(() => {
        reject(new Error("出错了!"));
    }, 1000);
})

console.log("主线程1");