console.log(1);

let p = new Promise((res, rej) => {
    console.log(2);
    res()
    console.log(3);
    rej()
    console.log(4);
    setTimeout(() => {
        console.log(8);
    }, 0)
})

p.then((v) => {
    console.log(5);
}).catch((r) => {
    console.log(6);
})
console.log(7);
setTimeout(() => {
    console.log(9);
}, 0)
