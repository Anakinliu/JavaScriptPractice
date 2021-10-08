async function sx(...args) {
    for (let e of args) {
        let res = await e
        console.log(res);
    }
}

let p1 = new Promise((res, rej) => {
    console.log(1);
    setTimeout(() => {
        res(2)
    }, 1000)
})

let p2 = new Promise((res, rej) => {
    console.log(3);
    setTimeout(() => {
        res(4)
    }, 500)
})

sx(p1, p2)


