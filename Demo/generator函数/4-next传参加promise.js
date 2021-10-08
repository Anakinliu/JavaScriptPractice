function* test() {
    let res1 = yield new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 600)
    })
    yield new Promise((res, rej) => {
        setTimeout(() => {
            res(res1);
        }, 300)
    })
}

let g = test();

g.next().value.then((v) => {

    console.log('v: ', v);

    g.next(2).value.then((v) => {
        console.log('v: ', v);
    });
});
