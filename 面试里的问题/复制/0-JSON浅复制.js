// const oldJson = { a: 1 }
// const newJson = JSON.parse(JSON.stringify(oldJson))
// oldJson.a = 2
// console.log(oldJson) // {a: 2}
// console.log(newJson) // {a: 1}

// 函数不能这么复制,因为JSON无法将函数对象转为string
function a() {

}

const newA = JSON.parse(JSON.stringify(a));
console.log(a);
console.log(newA);