//ES6字面量中重复定义的属性，不会报错，不管是严格和非严格模式。
'use strict';
let a = {
    age: 18,
    age: 20,
    age: 22
}
console.log(a);
