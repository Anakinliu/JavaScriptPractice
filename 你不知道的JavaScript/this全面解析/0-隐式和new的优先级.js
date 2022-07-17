function foo(n) {
    this.age = n;
}

var age = 999;

let obj = {
    age: 3,
    foo
}

let a = new obj.foo(6666);
console.log(obj.age); // 3
console.log(a.age);  // 6666

