function A() {

}

function B() {
    A.call(this)
}
B.prototype = Object.create(A.prototype);

let b = new B();

console.log(b.__proto__.__proto__ === A.prototype);

