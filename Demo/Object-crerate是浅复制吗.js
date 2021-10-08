let a = {
    age: 999
}
let b = Object.create(a);
console.log(b);
console.log(b.age);
a.age = 123;
console.log(b);
console.log(b.age);