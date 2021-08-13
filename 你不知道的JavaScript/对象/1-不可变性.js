let a = {
    arr: [1, 2]
}

Object.defineProperty(a, "arr", {
    writable: false,
    configurable: false
})

a.arr.push(3);
console.log(a.arr);

console.log('密封属性：');

let obj2 = {
    a: 123,
}

Object.seal(obj2)

obj2.b = 456;
console.log('obj2.b: ', obj2.b);
delete obj2.a;  // 密封后，不能删除已有属性
console.log('obj2.a: ', obj2.a);
Object.defineProperty(obj2, "a", {
    writable: false
})
// 密封后，不能重新配置
console.log(Object.getOwnPropertyDescriptor(obj2, "a"));