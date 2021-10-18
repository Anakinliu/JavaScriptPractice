// let fn = (x) => {
//     return x + 2;
// }

class A {
    static name = 'AAA';

    constructor(x) {
        this.age = x;
        this.test = () => {
            console.log(this.age);
        }
    }

    say() {
        console.log(this.age);
    }

    hi = () => {
        console.log(this.age);
    }
    hi2 = 666;
}
console.log(A.name);
console.log(A.hi);
console.log(A.hi2);

let aa = new A(3);
console.log(aa.hi);
console.log(aa.hi2);