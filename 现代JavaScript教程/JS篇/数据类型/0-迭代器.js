// 写在外面的版本
// let range = {
//     from: 1,
//     to: 5,
// }
// // 一个函数
// range[Symbol.iterator] = function () {
//     // 函数返回一个对象,对象必须包含一个next函数
//     return {
//         cur: this.from,
//         last: this.to,
//         // 对象包含一个next方法,next方法返回具有固定格式的对象
//         next() {
//             if (this.cur <= this.last) {
//                 return {
//                     done: false,
//                     value: this.cur++,
//                 }
//             } else {
//                 return {
//                     done: true,
//                 }
//             }
//         }
//     }
// }

// 写在里面的版本
// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]: function () {
//         // 函数返回一个对象,对象必须包含一个next函数
//         let cur = this.from;
//         let last = this.to;
//         // 这里的this
//         return {
//             // 对象包含一个next方法,next方法返回具有固定格式的对象
//             next: () => {
//                 // this就是return的对象 外层 的this
//                 // console.log(this.to);
//                 if (cur <= last) {
//                     return {
//                         done: false,
//                         value: cur++,
//                     }
//                 } else {
//                     return {
//                         done: true,
//                     }
//                 }
//             }
//         }
//     }
// }

// 剥离next函数
let father = {
    [Symbol.iterator]() {
        this.cur = this.from;
        return this;
    },
    next() {
        {
            if (this.cur <= this.to) {
                return {
                    done: false,
                    value: this.cur++,
                }
            } else {
                return {
                    done: true,
                }
            }

        }
    }
}
let range = {
    from: 1,
    to: 5,
}
range.__proto__ = father;

console.log(range.hasOwnProperty('next'));

for (let e of range) {
    console.log(e);
}
for (let e of range) {
    console.log(e);
}

// 箭头函数的this在哪里
// let x = {
//     age: 999,
//     show: () => {
//         console.log(this.age);
//     }
// }
// x.show();