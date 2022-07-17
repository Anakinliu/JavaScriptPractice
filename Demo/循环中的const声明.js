// for (const i = 0; i < 9; i++) {
//     console.log(i);
// }  // i++ 报错

// 不会报错,
// let arr = [1, 4, 6]
// for (const i of arr) {
//     console.log(i);
// }

let arr2 = [[1, 3], [2, 4]];
for (const i of arr2) {
    console.log(i, arr2[0] == i);
    console.log(i, arr2[1] == i);
    // i = [0]; // TypeError: Assignment to constant variable.
}

// for (let i of arr2) {
//     console.log(i, arr2[0] == i);
//     console.log(i, arr2[1] == i);
//     i.push(9)
// }
console.log(arr2);
