/**
 * 1. then接收两个回调,
 * 2. promise状态是fulfilled时执行的是成功回调,rejected时执行失败回调
 * 3. 如果resolve或者reject在定时器里,那么定时器结束后再执行then
 * 4. 链式调用,then返回一个promise实例
 */
class MyPromise {
    constructor(exec) {
        this.promiseResult = undefined;
        this.promiseState = 'pending';
        // this.onFulFilledCallback = [];
        // this.onRejectedCallback = [];
        // 好像不用数组也行...
        this.onFulFilledCallback = null;
        this.onRejectedCallback = null;
        try {
            exec(this.resolve, this.reject);
        } catch (e) {
            this.reject(e)
        }
    }

    resolve = (value) => {
        if (this.promiseState === 'pending') {
            this.promiseState = 'fulfilled'
            this.promiseResult = value;
            // console.log(this.onFulFilledCallback.length);
            // this.onFulFilledCallback.shift()(value)
            if (this.onFulFilledCallback) {
                this.onFulFilledCallback(value)
            }
        }
    }

    reject = (reason) => {
        if (this.promiseState === 'pending') {
            this.promiseState = 'rejected';
            this.promiseResult = reason;
            if (this.onRejectedCallback) {
                this.onRejectedCallback(reason)
            }
        }
    }
    /**
     * exec内的reject和resolve被异步调用时,此时then不是异步的,
     * 这会导致onFulfilled和onRejected无法执行
     * 
     * 如何保证then方法是在resolve或这reject后才执行???
     * 需要借助state进行判断,当promise还是pending时,
     * 执行then方法,则将当前then的onFulfilled和onRejected函数放入数组中,
     * 以备后面的异步的reject和resolve被调用时,可以正确调用对应的onFulfilled和onRejected
     * 
     * @param {*} onFulfilled 
     * @param {*} onRejected 
     */
    then = (onFulfilled, onRejected) => {
        // 因为then的两个参数可以省略,所以需要判断
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };


        if (this.promiseState === 'fulfilled') {
            onFulfilled(this.promiseResult);
        }
        if (this.promiseState === 'rejected') {
            onRejected(this.promiseResult);
        }
        if (this.promiseState === 'pending') {
            // this.onFulFilledCallback.push(onFulfilled);
            // this.onRejectedCallback.push(onRejected);
            this.onFulFilledCallback = onFulfilled;
            this.onRejectedCallback = onRejected;
        }
    }
}

let p = new MyPromise((res, rej) => {
    // res('ok')
    setTimeout(() => {
        res('ok')
        rej('fail')
    }, 1000);
})

p.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})
// console.log(p);

// let p = new MyPromise((res, rej) => {
//     throw Error('出错了');
// })
// console.log(p);