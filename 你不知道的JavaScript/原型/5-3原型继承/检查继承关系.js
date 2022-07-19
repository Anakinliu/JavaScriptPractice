/*
instanceof只能检查对象和函数之间的关系，对于对象和对象之间是否通过[prototype]关联，instanceof无能为力
*/

function A() {
    this.name = 123;
}

function B() {
    this.age = 23;
}

Object.setPrototypeOf(B.prototype, A.prototype);

const b = new B();

console.log(b instanceof A);  // true
console.log(b instanceof B);  // true

