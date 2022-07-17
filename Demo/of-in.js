let funcs = [];
let arr = ['a', 'v', 'e', 'd'];

// for (var e of arr) {
//     funcs.push(function () {
//         console.log(e);
//     })
// } // d d d d

// for (let e of arr) {
//     funcs.push(function () {
//         console.log(e);
//     })
// }// a v e d

// for (var e in arr) {
//     funcs.push(function () {
//         console.log(e);
//     })
// } // 3 3 3 3

// for (let e in arr) {
//     funcs.push(function () {
//         console.log(e);
//     })
// } // 0 1 2 3

funcs.forEach((e) => {
    e();
})