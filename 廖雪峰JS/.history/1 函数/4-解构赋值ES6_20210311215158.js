var [a,b,c] = [3,5,7];
console.log(a,b,c);

//注意嵌套层次和位置要保持一致
var [a,[b,c]] = [3,[5,7]];
console.log(b);
var [a,b] = [3,[5,7]];
console.log(b[0]);

//解构赋值还可以忽略某些元素：
var [,,d] = [2,4,6];
console.log(d);

var [,d,] = [2,4,6];
console.log(d);

// 对象解构赋值
var person = {
    nam: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {nam, age, passport} = person;
console.log(nam,age,passport);

// Map解构赋值
let [m1] = new Map();
m1.set('8xing', 123);
m1.set('sel', [1,2,3]);

console.log(sel);
