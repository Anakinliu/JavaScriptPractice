if (!Function.prototype.softBind) {
    Function.prototype.softBind = function (obj) {
        let fn = this;
        // 得到第二个-最后一个参数
        // 注意区分这里的arguments和下面的arguments不是一个！
        // 这里的arguments是调用softBind传入的参数
        let curried = Array.prototype.slice.call(arguments, 1);
        let bound = function () {
            return fn.apply(
                // this不存在或者this是全局对象，则修改this为你指定的obj，否则不修改！
                (!this || this === (global)) ?
                    obj :
                    this,
                // 这里的arguments是调用bound函数传入的参数
                curried.concat.apply(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
}

var a = "全局的a变量"

function foo() {
    console.log(this.a);
}

let obj1 = {
    a: '对象1的a变量'
}
let obj2 = {
    a: '对象2的a变量'
}

let f = foo.softBind(obj1);
f() // 对象1的a变量
obj2.foo2 = foo.softBind(obj1);
obj2.foo2()  // 对象2的a变量


