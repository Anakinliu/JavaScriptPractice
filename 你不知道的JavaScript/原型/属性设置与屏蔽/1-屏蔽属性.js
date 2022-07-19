const a = {
    age: 22
}

const b = Object.create(a);

console.log(b.hasOwnProperty('age'));  // false

b.age = 32;  // 直接在b上添加了一个名为age的属性

// 屏蔽属性
console.log(b.hasOwnProperty('age'));  // true

console.log(a.age);  // 22