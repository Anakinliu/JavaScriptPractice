// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 10);
// }

let i = 1;
for (; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 10);
}