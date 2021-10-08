new Promise((resolve, reject) => {
    console.log(1)
    resolve()
}).then(() => {  // then 1
    console.log(2)
    new Promise((resolve, reject) => {
        console.log(3)
        resolve()
    }).then(() => {  // then 2
        console.log(4)
    }).then(() => {  // then 3
        console.log(5)
    })
}).then(() => {  // then 4
    console.log(6)
})

new Promise((resolve, reject) => {
    console.log(7)
    resolve()
}).then(() => {  // then 5
    console.log(8)
})
