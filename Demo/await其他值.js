// await 后面不适用promise会怎么样
(async function test() {
    let a = await 1;
    let b = await a;
    console.log(a);
    console.log(b);
})()