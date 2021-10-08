let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 10000); // 10 秒后调用reject()
    // 执行函数的逻辑
});
setTimeout(console.log, 0, p); // Promise <pending>