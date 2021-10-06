// ES6 class和ES5继承的hasOwnProperty有没有区别?
class Parent {
    constructor() {
        this.age = 999;
    }
    say() {
        console.log(this.age);
    }
}

class Child extends Parent {
    constructor() {
        super();
    }
}

// let child = new Child();

// console.log(child.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("ages"));
// console.log(child.hasOwnProperty("say"));

// ES5
function P() {
    this.age = 999;
}
P.prototype.say = function () {
    console.log(this.age);
}

function C() {
    P.call(this)
}
C.prototype = Object.create(P);

let child = new C();
console.log(child.hasOwnProperty("age"));
console.log(child.hasOwnProperty("ages"));
console.log(child.hasOwnProperty("say"));
