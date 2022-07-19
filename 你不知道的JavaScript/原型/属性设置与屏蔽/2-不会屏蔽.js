// 'use strict' // 严格模式下报错
const a = {
}

// 只读属性
Object.defineProperty(a, 'age', {
    writable: false,
    value: 22
})

const b = Object.create(a);

console.log(b.hasOwnProperty('age'));  // false

b.age = 32;
// 没有发生屏蔽
console.log(b.hasOwnProperty('age'));  // false

console.log(b.age);  // 22
console.log(a.age);  // 22

Object.defineProperty(b, 'age', {
    value: 12
})
console.log(b.hasOwnProperty('age'));  // TRUE


// JS模仿继承，使得子类也继承了父类属性的只读，但是，实际上JS里并没有发生真正的继承
// 并且这种问题只存在=赋值，使用defineProperty不受影响