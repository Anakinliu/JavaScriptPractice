async function async1() {
    console.log(1);
    await async2();  // promise 1
    console.log(2);
}
async function async2() {
    console.log(3);
}

console.log(4);

setTimeout(function () {
    console.log(5);
});

async1()

new Promise(function (resolve, reject) {
    console.log(6);
    resolve();
}).then(function () {  // then 2
    console.log(7);
});

console.log(8);
