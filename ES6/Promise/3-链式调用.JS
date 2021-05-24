// https://mengera88.github.io/2017/05/18/Promise%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/
let prePromiseResult = '未定义';
let prePromise = function (arg) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            let x = true;
            if (x) {
                prePromiseResult = "prePromise 异步任务成功的结果";
                reslove(arg + ' abc');  // reslove结果，链式地被传递到了下面的 nxtPromise
            } else {
                prePromiseResult = "prePromise 异步任务失败的结果";
                reject(arg + ' def');
            }
        }, 2000);
    });  // 创建了以后，就会被执行，不管有没有设置 reslove 和 reject 回调函数
}


/**
 * 
 * promise 等待 prePromise 状态由 pending 变为 fulfilled 或者 rejected 才会执行
 */
let nxtPromise = function (arg) {
    new Promise((reslove, reject) => {
        setTimeout(() => {
            let x = arg;
            if (x) {
                reslove(prePromise);
            } else {
                reject(prePromise);
            }
        }, 1000);  // 当x 为 true 时， 虽然为 0， 但是必须等待 prePromise 状态由 pending 变为 fulfilled 或者 rejected 才会执行
    });
}
let gg = prePromise('steam')
console.log(gg);
gg.then((arg) => {
    console.log(arg);
})



