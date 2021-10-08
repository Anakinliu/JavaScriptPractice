// 1
// const p = new Promise((resolve, reject) => {
//     resolve()
// })
// p.then(() => {
//     console.log(1);
//     return Promise.resolve(666)
// })
// p.then((v) => {
//     console.log(2);
//     console.log(v);
// })

// 2
// const p = new Promise((resolve, reject) => {
//     resolve()
// })
// p.then(() => {
//     console.log(1);
//     return Promise.resolve(666)
// }).then((v) => {
//     console.log(2);
//     console.log(v);
// })