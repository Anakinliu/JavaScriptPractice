var a = ['a','v'];
var s = new Set([6,1,3,4,5]);
var m = new Map([
    [1,'a'],
    [2, 'b'],
    [3, 'c']
]);
// for...of
function show(x) {
    for (var e of x) {
        console.log(e);
    }
}
// show(a);
// show(s);
// show(m);

// for each
// foreach的函数有三个参数，由于JS特性，可以不写全
a.forEach(function (value,index,array) {
    console.log(value,index,array);
})
s.forEach(function (value1,value2,array) {
    console.log(value1,value2,array);
})
m.forEach(function (value,key,m) {
    console.log(key,value,m);
})
