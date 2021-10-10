// 需要绑定resolve和reject方法的this
class MyPromise {
    constructor(exec) {
        this.promiseResult = undefined;
        this.promiseState = 'pending';
        try {
            exec(this.resolve, this.reject);
        } catch (e) {
            this.reject(e)
        }

    }

    resolve = (value) => {
        if (this.promiseState === 'pending') {
            this.promiseResult = 'fulfilled'
            this.promiseState = value;
        }
    }

    reject = (reason) => {
        if (this.promiseState === 'pending') {
            this.promiseResult = 'rejected';
            this.promiseState = reason;
        }
    }
}

let p = new MyPromise((res, rej) => {
    res('ok')
    rej('fail')
})
console.log(p);

// let p = new MyPromise((res, rej) => {
//     throw Error('出错了');
// })
// console.log(p);