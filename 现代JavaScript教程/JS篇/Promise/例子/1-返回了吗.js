let promise = new Promise(function (resolve, reject) {
    console.log("执行1");
    resolve(1);
    console.log("执行2");
    setTimeout(() => resolve(2), 1000);
    console.log("执行3");
}); 
promise.then(console.log);