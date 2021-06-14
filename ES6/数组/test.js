function s() {
    console.log(arguments);
    console.log(typeof arguments);
    console.log(Array.prototype.slice.call(arguments));
    console.log(Array.from(arguments));
}

s(1,2,3);               