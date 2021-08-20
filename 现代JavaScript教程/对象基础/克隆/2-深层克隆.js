// https://segmentfault.com/a/1190000006687581
// function typeValue(value) {
//     let typeMap = {
//         '[object Array]': 'array',
//         '[object Function]': 'function',
//         '[object Object]': 'object',
//     }
//     return typeMap[Object.prototype.toString.call(value)];
// }
let visitedObjs = [];
function deepClone(value) {
    // 遍历寻找 相同引用
    for(let i = 0; i < visitedObjs.length; i++){
        if(visitedObjs[i].value === value){        
          return visitedObjs[i].copy;
        }
      }
    if (Object.prototype.toString.call(value) === '[object Array]') {
        let copy = [];
        visitedObjs.push({value, copy})
        for (let e of value) {
            copy.push(deepClone(e));
        }
        return copy;
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
        // 因为assign方法可以看到symbol属性,但是for...in看不到,虽然会导致重复赋值
        let copy = Object.assign({}, value);
        visitedObjs.push({value, copy})
        for (let key in value) {
            copy[key] = deepClone(value[key]);
        }
        return copy;
    } else {
        return value;
    }
}

let id = Symbol('id');  // Symbol属性会不会复制

let a = {
    isAlive: true,
    age: 99,
    likes: ["game", "book"],
    action: function () {
        console.log(this.likes);
    },
    friends: [{ age: 99 }, { age: 19 }],
    [id]: 1234,
}
let c = {
    a: a,
}
a['c'] = c;

let b = deepClone(a);

a.likes[0] = "girls";  // 相同引用问题
a.friends[0] = { age: 9999999999999 };
a.next = b;
b.pre = a;  // 循环引用问题

console.log(b);

// let f = function () {
// }
// let d = new Date();
// console.log(typeValue(f));
// console.log(typeValue(d));
