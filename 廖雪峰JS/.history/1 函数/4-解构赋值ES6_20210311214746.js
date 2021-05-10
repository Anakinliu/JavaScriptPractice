var [a,b,c] = [3,5,7];
console.log(a,b,c);

//注意嵌套层次和位置要保持一致
var [a,[b,c]] = [3,[5,7]];
console.log(b);
var [a,b] = [3,[5,7]];
console.log(b[0]);

var [,,d] = [2,4,6];
console.log(d);