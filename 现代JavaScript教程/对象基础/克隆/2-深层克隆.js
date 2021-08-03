// https://segmentfault.com/a/1190000006687581
function typeValue(value) {
    let typeMap = {
        '[object Array]': 'array',
        '[object Function]': 'function',
        '[object Object]': 'object',
    }
    return typeMap[Object.prototype.toString.call(value)];
}
function deepClone(value) {
    let copy;
    function clone(value) {
        if (typeValue(value) === 'array') {
            let temp = [];
            for (let e of value) {
                temp.push(clone(e));
            }
            return temp;
        }
        if (typeValue(value) === 'object') {
            let temp = {};

            // 因为assign方法可以看到symbol属性,但是for...in看不到
            Object.assign(temp, value);
            
            for (let key in value) {
                temp[key] = clone(value[key]);
            }
            return temp;
        }
        return value;

    }
    copy = clone(value);
    return copy;
}

let id = Symbol('id');

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

let b = deepClone(a);
a.likes[0] = "girls";
a.friends[0] = { age: 9999999999999 };
console.log(b);

// let f = function () {
// }
// let d = new Date();
// console.log(typeValue(f));
// console.log(typeValue(d));
