var date = new Date()

console.log(1, new Date() - date)

setTimeout(() => {
    console.log(2, new Date() - date)
}, 500)

// Promise.resolve().then(() => console.log(3, new Date() - date))
Promise.resolve().then(console.log(3, new Date() - date))

while (new Date() - date < 1000) { }

console.log(4, new Date() - date)

console.log(1);
let a = Promise.resolve()
let res = a.then(console.log('2'))
console.log(3);

/**
执行结果： 1 3 4 2。
代码从上往下执行，
先打印1，看见setTimeout丢到宏任务里面，等待执行，
因为promise.then()的参数是一个console.log（注意：并不是一个函数），且then是立即执行的。
函数立即执行，会先走参数的逻辑，然后在去调用函数。
所以先打印3，并且给then传了一个undefined（console.log的返回值是undefined），再把then丢到微任务里面
while循环是同步任务，等待1s后打印4，
此时同步任务走完了，开始执行异步任务，先将then取出来执行，发现then的第一个参数是一个undefined，
promise内部会判断，如果then的第一个参数，也就是成功回调函数，不是一个参数的话，会自动给他包装成一个函数，并且将resolve的value值透传到下一个then里面。
然后去执行setTimeout，最后打印2。
如果说得不对的地方，欢迎大家讨论
 */