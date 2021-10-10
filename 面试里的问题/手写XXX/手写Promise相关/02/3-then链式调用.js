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
        this.onFulFilledCallback = [];
        this.onRejectedCallback = [];
        try {
            exec(this.resolve, this.reject);
        } catch (e) {
            this.reject(e)
        }
    }


    resolve = (value) => {
        console.log('resolve: ', value, ' | ', this.onFulFilledCallback);
        if (this.promiseState === 'pending') {
            this.promiseState = 'fulfilled'
            this.promiseResult = value;
            while (this.onFulFilledCallback.length) {
                console.log('this.onFulFilledCallback.length: ', this.onFulFilledCallback.length);
                this.onFulFilledCallback.shift()(this.promiseResult)
            }
        }
    }

    reject = (reason) => {
        if (this.promiseState === 'pending') {
            this.promiseState = 'rejected';
            this.promiseResult = reason;
            while (this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(this.promiseResult)
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
     * 如何保证链式调用?
     * 1. then会返回一个新的promise实例
     * 2. 如果返回值写了就是promise,那么then返回的状态取决于这个promise
     * 3. 如果返回值非promise,新promise对象就是成功,值为此返回值
     * 
     * @param {*} onFulfilled 
     * @param {*} onRejected 
     */
    then = (onFulfilled, onRejected) => {
        // 因为then的两个参数可以省略,所以需要判断并设置默认值
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        // 放到thenPromise里了
        // if (this.promiseState === 'fulfilled') {
        //     onFulfilled(this.promiseResult);
        // }
        // if (this.promiseState === 'rejected') {
        //     onRejected(this.promiseResult);
        // }
        // if (this.promiseState === 'pending') {
        //     this.onFulFilledCallback.push(onFulfilled);
        //     this.onRejectedCallback.push(onRejected);
        // }

        let thenPromise = new MyPromise((res, rej) => {
            // console.log(this.promiseState);
            // 此函数是一个箭头函数,exec也是箭头函数,所以resolvePromise声明时就会绑定到外面的promise,而不是这个promise
            const resolvePromise = tt => {
                try {
                    // 这个this是外面的,而不是这个新建的MyPromise的
                    const x = tt(this.promiseResult);  // 执行tt函数
                    if (x === this.thenPromise) {
                        throw new Error("then返回一个新的promise而不是自身")
                    }
                    if (x instanceof MyPromise) {
                        // console.log('here');
                        x.then(res, rej);
                    } else {
                        // 非promise时primise实例就是调用resolve的fulfilled的
                        res(x);
                    }
                } catch (err) {
                    rej(err)
                }
            }

            if (this.promiseState === 'fulfilled') {
                // onFulfilled(this.promiseResult);
                resolvePromise(onFulfilled);
            }
            if (this.promiseState === 'rejected') {
                // onRejected(this.promiseResult);
                resolvePromise(onRejected);
            }
            // resolve或者reject是被异步调用的
            if (this.promiseState === 'pending') {
                this.onFulFilledCallback.push(() => {
                    resolvePromise(onFulfilled)
                });
                this.onRejectedCallback.push(() => {
                    resolvePromise(onRejected)
                });
            }
        })
        return thenPromise;
    }
}

let p = new MyPromise((res, rej) => {
    // res('ok')
    setTimeout(() => {
        res('ok')
        // rej('fail')
    }, 1000);
})

// p.then(res => {
//     console.log(res);
// })

p.then(res => {
    console.log('then1 res: ', res);
    return new Promise((res2, rej) => {
        setTimeout(() => {
            res2();
        }, 1000)
    })
}
).then(
    res2 => {
        console.log(res2);
    }, err2 => {
        console.log(err2);
    }
)
// console.log(p);

// let p = new MyPromise((res, rej) => {
//     throw Error('出错了');
// })
// console.log(p);