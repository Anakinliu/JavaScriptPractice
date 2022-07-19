const a = {
    age: 22
}
Object.defineProperty(a, 'school', {
    enumerable: false,
    value: 'CQ'
})

// b的[[prototype]]指向a
const b = Object.create(a);

// in检查属性时，无视enumerable
console.log('age' in b);
console.log('school' in b);

// for循环的in受enumerable限制
for (const k in b) {
    console.log(k + ': ' + b[k]);
}