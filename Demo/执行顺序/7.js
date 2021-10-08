async function async1() {
    console.log(1);
    await async2();
    console.log(2);
}
async function async2() {
    console.log(3);
}

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log(4)
    }, 1000);
}).then(() => {  // then 1
    console.log(5)
    new Promise((resolve, reject) => {
        setTimeout(() => {
            async1()
            resolve()
            console.log(6)
        }, 1000)
    }).then(() => {  // then 2
        console.log(7)
    }).then(() => {  // then 3
        console.log(8)
    })
}).then(() => {  // then 4
    console.log(9)
})

new Promise((resolve, reject) => {
    console.log(10)
    setTimeout(() => {
        resolve()
        console.log(11)
    }, 3000);
}).then(() => {  // then 5
    console.log(12)
})
