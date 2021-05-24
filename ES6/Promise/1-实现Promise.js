/**
 * https://mengera88.github.io/2017/05/18/Promise%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/
 */
function MyPromise(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调
    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return this;
    };
    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }
    fn(resolve);
}

let prePromiseResult = '未定义';
let prePromise = new MyPromise((reslove, reject) => {
    setTimeout(() => {
        console.log('prePromise 异步任务中。。。');
        let x = true;
        if (x) {
            console.log('prePromise 执行成功。。。');
            prePromiseResult = "prePromise 异步任务成功的结果";
            reslove('SUCCESS');  // reslove结果，链式地被传递到了下面的 nxtPromise
        } else {
            console.log('prePromise 执行失败。。。');
            prePromiseResult = "prePromise 异步任务失败的结果";
            reject('FAILED');
        }
        
    }, 2000);
});  // 创建了以后，就会被执行，不管有没有设置 reslove 和 reject 回调函数

