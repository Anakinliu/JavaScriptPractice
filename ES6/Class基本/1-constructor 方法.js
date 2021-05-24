class Foo {
    constructor() {
        return Object.create(null);
    }
}
console.log(new Foo() instanceof Foo);
  // false

function Foo2(n) {
    this.name = n;
}

let f1 = new Foo();
let f2 = Foo2('不用加 new 也行');