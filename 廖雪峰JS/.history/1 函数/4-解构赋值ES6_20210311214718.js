var [a,b,c] = [3,5,7];
console.log(a,b,c);

var [a,[b,c]] = [3,[5,7]];
console.log(b);
var [a,b] = [3,[5,7]];
console.log(b);

var [,,d] = [2,4,6];
console.log(d);