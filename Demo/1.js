// function D() {
//     console.log(arguments);
//     return 2;
// }
// function t() {
//     console.log(arguments);
//     D.call(arguments)
// }
// t(D, 1, 2, 3)

// console.log(Array.prototype.shift.call([1, 2, 3]));

function f1() {
    console.log(2);
    return Promise.resolve('3');
}

async function f2() {
    console.log(1);
    await f1();
    console.log(4);
}
f2();