function foo() {
    // 返回一个箭头函数
    this.a = 666;
    return (a) => {
        //this 继承自foo()
        console.log(this.a);
    };
}
var a = 999;
let f = foo();
let obj = {
    a: 222,
    f
}
console.log(':');
obj.f();