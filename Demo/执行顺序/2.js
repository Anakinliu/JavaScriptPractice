setTimeout(() => {
    console.log(1)
}, 0)
console.log(2)
const p = new Promise((resolve) => {
    console.log(3)
    // setTimeout(() => {
    //     resolve()
    // }, 0)
    resolve()
}).then(() => {
    console.log(4)
}).then(() => {
    console.log(5)
})
console.log(6)
