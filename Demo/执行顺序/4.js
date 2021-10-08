// 注意和3.js的区别
new Promise((resolve, reject) => {
    console.log(1)
    resolve()
}).then(() => {
    console.log(2)
    // 多了个return
    return new Promise((resolve, reject) => {
        console.log(3)
        resolve()
    }).then(() => {
        console.log(4)
    }).then(() => { // 相当于return了这个then的执行返回Promise
        console.log(5)
    })
}).then(() => {
    console.log(6)
})
