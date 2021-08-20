function A() {
    this.age = 99;
    return { age: 19 };
}
function B() {
    this.arr = [1, 2, 3];
    return [4, 5, 6];
}

function C() {
    this.name = 'TOM';
    return 'John';
}

let a = new A();
let b = new B();
let c = new C();

console.log(a);
// { age: 19 }  丢失this
console.log(b);
// [ 4, 5, 6 ]  丢失this
console.log(c); 
// C { name: 'TOM' }  还是this