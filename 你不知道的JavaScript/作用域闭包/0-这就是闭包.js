var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log(++a);
    }
    fn = baz; // 将baz 分配给全局变量
}
// function bar() {
//     fn(); // 妈妈快看呀，这就是闭包！
// }
foo();
fn();
fn();
// bar(); // 2