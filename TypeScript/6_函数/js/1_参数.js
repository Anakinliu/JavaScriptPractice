"use strict";
// 与JS不同,TS的参数就像Java里的,只要有参数,就必须要传入
function func2(id, name) {
    console.log("id: " + id + ", name: " + name);
}
// func2();
func2(1, '2');
/* 可选参数 */
// 可以在参数名旁使用?实现可选参数的功能
function func3(id, name) {
    console.log("id: " + id + ", name: " + name);
}
func3(); // 这样调用参数得到的就是undefined
func3(2);
/* 默认值参数 */
// 在形参后赋值就是一个默认值参数,不能和可选参数同时作用在一个形参长
// 普通参数最好放在最前面
function func4(oth, id, name) {
    if (id === void 0) { id = 1; }
    if (name === void 0) { name = 'no'; }
    console.log("id: " + id + ", name: " + name);
}
// func4(1);
func4(2);
function func5(oth, id, name, age) {
    if (id === void 0) { id = 1; }
    if (name === void 0) { name = 'no'; }
    console.log("id: " + id + ", name: " + name);
}
func5(1);
