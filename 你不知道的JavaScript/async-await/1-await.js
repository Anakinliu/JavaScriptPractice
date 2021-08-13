async function f1() {
    console.log(1);
    let p = new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ data: [666, 999] })
        }, 1000);
    })
    console.log(2);
    let result = await p;
    console.log(3);
    console.log(result);
    console.log(4);
}
f1().then(value => {
    console.log(value);
})