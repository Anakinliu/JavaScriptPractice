/**
 * 1. then接收两个回调,
 * 2. promise状态是fulfilled时执行的是成功回调,rejected时执行失败回调
 * 3. 如果resolve或者reject在定时器里,那么定时器结束后再执行then
 * 4. 链式调用,then返回一个promise实例
 */
class MyPromise {
    constructor(exec) {
        console.log('constructor start');
        this.promiseResult = undefined;
        this.promiseState = 'pending';
        try {
            exec(this.resolve, this.reject);
        } catch (e) {
            this.reject(e)
        }
        console.log('constructor done');
    }

    resolve = (value) => {
        console.log('reslove start');
        if (this.promiseState === 'pending') {
            this.promiseState = 'fulfilled'
            this.promiseResult = value;
        }
        console.log('reslove end');

    }

    reject = (reason) => {
        console.log('reject start');
        if (this.promiseState === 'pending') {
            this.promiseState = 'rejected';
            this.promiseResult = reason;
        }
        console.log('reject end');
    }

    then = (onFulfilled, onRejected) => {
        // 因为then的两个参数可以省略,所以需要判断
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        if (this.promiseState === 'fulfilled') {
            onFulfilled(this.promiseResult)
        }
        if (this.promiseState === 'rejected') {
            onRejected(this.promiseResult)
        }
    }
}

let p = new MyPromise((res, rej) => {
    console.log('exec start');
    // res('ok')
    rej('fail')
    console.log('exec end');
})

p.then(res => {
    console.log('then res: ', res);
}, err => {
    console.log('then rej: ', err);
})
// console.log(p);

// let p = new MyPromise((res, rej) => {
//     throw Error('出错了');
// })
// console.log(p);