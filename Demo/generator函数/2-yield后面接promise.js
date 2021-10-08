function* test() {
    yield new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 600)
    })
    yield new Promise((res, rej) => {
        setTimeout(() => {
            res(2);
        }, 300)
    })
}

let g = test();

g.next().value.then((v) => {

    console.log('v: ', v);

    g.next().value.then((v) => {
        console.log('v: ', v);
    });
});
