const PENDDING = 'pendding';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

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
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === REJECT) {
            onReject(this.reason);
        }
        // 状态为“等待”，也就是异步执行发布订阅
        if (this.status === PENDDING) {
            //  发布
            this.onResolveCallbacks.push(() => {
                // 做其他任务的代码
                // todo。。。
                onFulfilled(this.value);
            })
            //  订阅
            this.onRejectCallbacks.push(() => {
                onReject(this.reason)
            })
        }
    }
}


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
