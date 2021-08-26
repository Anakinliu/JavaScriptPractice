setTimeout(function () {
    console.log(1);
}, 0);

let x = Promise.resolve(function (resolve) {
    console.log(2);
});
x.then(value => {
    console.log('value: ', value);
}) 

new Promise(function (resolve) {
    console.log(3);
});

console.log(4);