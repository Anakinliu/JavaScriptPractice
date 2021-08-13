let obj = {
    a: 2
}

Object.defineProperty(obj, 'a', {
    configurable: false
})

console.log(obj.a);
delete obj.a  // delete 无法删除
console.log(obj.a);

// 报错：TypeError: Cannot redefine property: a
Object.defineProperty(obj, 'a', {
    configurable: true
})