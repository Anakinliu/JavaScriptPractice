var a = 1
var arr = [1, 2, 3]
var f = function () {
    console.log(233)
}

export {
    a,
    arr,
    f
}

export function tool() {
    console.log('this is tool.');
}

class Animal {
    constructor(n) {
        this.name = n;
    }
    bark() {
        console.log('我是' + this.name);
    }
}

export default Animal;