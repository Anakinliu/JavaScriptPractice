console.log([1, 2, 3].map(parseInt));


console.log([1, 2, 3].map(Number));

function test(a, b, c) {
    console.log('a: ', a, 'b:', b, 'c:', c);

}
[1, 2, 3].map(test);