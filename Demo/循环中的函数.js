var funcs = [];

// var,输出10个11
// for (var i = 0; i <= 10; i++) {
//     funcs.push(function () {
//         console.log(i);
//     })
// }

// IIFE-立即执行函数,强制生成变量i的一个副本
// for (var i = 0; i <= 10; i++) {
//     (function (i) {
//         funcs.push(function () {
//             console.log(i);
//         });
//     })(i)
// }
// 也是IIFE
// for (var i = 0; i <= 10; i++) {
//     funcs.push(
//         (function (value) {
//             return function () {
//                 console.log(value);
//             }
//         })(i)
//     );
// }

// 输出0-10
/**
 * 每次循环,let声明创建一个新变量i,
 * 将其初始化i的当前值,
 * 所以,循环内部创建的函数都得到了i的副本
 * 
 */
// for (let i = 0; i <= 10; i++) {
//     funcs.push(function () {
//         console.log(i);
//     })
// }

funcs.forEach(function (ele) {
    ele();
})
// 0-10