async function f1() {
    return 1;
}
async function f2() {
    return
}
async function f3() {
    return new Promise((resolve, rekected) => {
        resolve("OK");
    });
}
console.log(f1()); // Promise { 1 }
console.log(f2());// undefined
console.log(f3());  //Promise { <pending> }
f3().then(value => {console.log(value);});