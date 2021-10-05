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

        let resolve = (value) => {
            // 只有当前状态是PENDDING时才更改状态
            if (this.status === PENDDING) {
                this.value = value;
                this.status = FULFILLED;
            }
        }

        let reject = (reason) => {
            if (this.status === PENDDING) {
                this.reason = reason;
                this.status = REJECT;
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
    }
}


let p = new Promise((resolve, reject) => {
    console.log(1);
    resolve("价值1000");
    console.log(2);
})
p.then(data => {
    console.log('success ', data);
}, err => {
    console.log('error ', err);
})
