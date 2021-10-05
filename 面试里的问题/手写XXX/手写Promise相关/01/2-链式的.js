const PENDDING = 'pendding';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

const resolvePromise = (promise2, x, resolce, reject) => {
    // 根据  x 的类型，判断调用resolve和reject中的哪个

    // 自己等待自己，会无限循环，要抛出错误来终止
    if (promise2 === x) {
        return reject(new TypeError("检测到promise的链式循环"))
    }

    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        // 通过then判断 x 是不是promise
        try {
            let then = x.then;
            let called = false;  // 防止多次调用
            // then是函数，说明 x 是 promise实例
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) {
                        return
                    }
                    called = true;
                    resolcePromise(promise2, y, resolce, reject);
                }, reason => {
                    if (called) {
                        return
                    }
                    called = true;
                    reject(reason);
                })
            } else {
                // x 只是基本类型的值
                resolve(x);
            }
        } catch (e) {
            if (called) {
                return
            }
            called = true;
            reject(e);
        }
    } else {
        // x 只是基本类型的值
        resolve(x)
    }
}

class Promise {
    constructor(executor) {
        // 成功的值
        this.value = undefined;
        // 失败的值
        this.reason = undefined;
        //  状态值
        this.status = PENDDING;
        // 一个promise可以执行多次then，相当于发布订阅模式
        this.onResolveCallbacks = [];
        this.onRejectCallbacks = [];


        let resolve = (value) => {
            // 只有当前状态是PENDDING时才更改状态
            if (this.status === PENDDING) {
                this.value = value;
                this.status = FULFILLED;
                // 订阅，resolve可能被异步调用，此时就要执行之前发布的任务
                this.onResolveCallbacks.forEach(fn => fn());
            }
        }

        let reject = (reason) => {
            if (this.status === PENDDING) {
                this.reason = reason;
                this.status = REJECT;
                this.onRejectCallbacks.forEach(fn => fn());
            }
        }

        // 因为执行器内可能发生异常
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled, onReject) {
        // onFulFilled 和 obReject的默认值
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (val) { return val };
        onReject = typeof onReject === 'function' ? onReject : function (err) { throw err };

        let promise2 = new Promise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            if (this.status === REJECT) {
                setTimeoutq(() => {
                    try {
                        let x = onReject(this.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            if (this.status === PENDDING) {
                // 发布
                this.onResolveCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
                // 发布
                this.onRejectCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onReject(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }
        })

        return promise2
    }
}

setTimeout(() => {
    console.log(3);
}, 0)
let p = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        resolve("价值1000");
    }, 0);
    console.log(2);
})
p.then(data => {
    console.log('success ', data);
}, err => {
    console.log('error ', err);
})
