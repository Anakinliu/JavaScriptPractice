let p = [new Promise(() => { })]
let res = Promise.race(p);
// console.log(res);
res.then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);
})