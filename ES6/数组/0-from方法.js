// 将参数转为数组

console.log(Array.from([1,2,3])); // [1,2,3]
console.log(Array.from("123")); // [ '1', '2', '3' ]  
console.log(Array.from("1 2 3"));  // [ '1', ' ', '2', ' ', '3' ]

console.log(Array.from({a:1,b:2})); // []
console.log(Array.from(123)); // []

console.log('----');

let m1 = new Map();
m1.set('g','game');
m1.set('s', 'sc');
console.log(m1);
console.log(Array.from(m1));

console.log('----');

let s1 = new Set();
s1.add(1);
s1.add("GG");
console.log(s1);
console.log(Array.from(s1));