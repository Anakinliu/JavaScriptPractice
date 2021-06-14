function show(a,b,c) {
    console.log('--show s--');
    console.log(a,b,c,this,'\n');
    console.log('--show e--');
}

const obj = {
    age : 99,
    name : "zzx"
}

// const fn = show.bind(obj, 1,2,3);
// fn();


// bind 是定义在了Function.prototype上的
// console.log(Function.prototype.bind === show.bind);  // true
// 所以,自己手写的bind也要绑定到这个prototype上

console.log("---bind2:---");
// 实现 bind
const bind2 = function(...args) {

    // console.log(args);
    // 得到执行者:this,即下面的show函数
    let that = this;

    return function() {
        // args[0]即bind中的第一个参数
        that.apply(args[0], args.slice(1));
    }
}

Function.prototype.bind2 = bind2;


const fn2 = show.bind2(obj, 1,2,3);
fn2();

const fn = show.bind(obj, 1,2,3);
fn();

