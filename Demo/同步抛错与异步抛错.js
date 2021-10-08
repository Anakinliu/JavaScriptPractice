try {
    throw Error("同步错误")
} catch (e) {
    console.log("同步错误: ", e);
}
console.log('---');
// reject的错误没有抛到执行同步代码的线程里,因此同步线程的try-catch块不能捕获错误
try {
    Promise.reject()
} catch (e) {
    console.log("异步错误: ", e);
}