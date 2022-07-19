const a = {
    age: 22
}

const b = Object.create(a);

console.log(b.hasOwnProperty('age'));  // false

b.age++;  // 相当于 b.age = b.age + 1;

console.log(b.hasOwnProperty('age'));  // true
