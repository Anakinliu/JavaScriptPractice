/// 实现一个retry函数，使得该defer函数可以在执行5次以后，输出成功与否
async function retry(func, times) {
    if (times === 1) {
        return await func(times);
    }
    await func(times);
    times -= 1;
    return retry(func, times);
}

// 下面是题目给定的
const defer = (num) => {
    return new Promise((resolve) => {
        return setTimeout(
            () => {
                console.log(`defer函数：${num}次`);
                if (num === 1) {
                    resolve('OK')
                } else {
                    resolve()
                }

            }, 1000
        )
    });
}
retry(defer, 5).then(
    (v) => {
        console.log('v : ', v);
        console.log('success')
    },
    (e) => { console.log('reject') }
)

