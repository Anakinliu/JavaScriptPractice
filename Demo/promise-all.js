// let p = [1, 2, 3]
// let res = Promise.all(p)
// console.log(res);

// let p = [Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(4)]
let p = [Promise.resolve(1), new Promise(() => { }), Promise.resolve(3)]
let res = Promise.all(p);
console.log(res);
res.then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);
})