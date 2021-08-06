let a = {
    aFun() {
        console.log('this is a');
    }
}
let b = {
    bFun() {
        console.log("this is b");
    }
}

a.__proto__ = b;
b.__proto__ = a;
