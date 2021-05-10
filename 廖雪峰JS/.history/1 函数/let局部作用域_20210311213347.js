// 'use strict';
/*
**由于JavaScript的变量作用域实际上是函数内**部，我们在`for`循环等语句块中是无法定义具有局部作用域的变量的：
*/
function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
    console.log(i);  // 200
}
foo();

/**
 * 使用 let 声明局部作用域的变量
 */
function fooLet() {
    for (let i = 0; i<100; i++) {

    }
    i += 999;
    console.log(i);
}
fooLet()
