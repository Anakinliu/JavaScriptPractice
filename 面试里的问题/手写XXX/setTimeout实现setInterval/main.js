function myInterval(fn, delay) {
    let timer = null;
    let isCancel = false;
    function interval() {
        if (isCancel) {
            isCancel = false;
            clearTimeout(timer);
            return;
        }
        fn();
        // 形成递归调用interval
        timer = setTimeout(interval, delay);
    }
    // 到达delay时调用interval
    timer = setTimeout(interval, delay);
    // 构成闭包
    return () => {
        isCancel = true;
    }
}

let t = myInterval(() => {
    console.log(123);
}, 1000)

// 10 秒后停止 setInterval
setTimeout(() => {
    t();
}, 10000)