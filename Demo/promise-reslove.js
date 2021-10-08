console.log(1);
Promise.resolve(new Promise((res, rej) => {
    console.log(2);
}));

console.log(3);