let a = {
    p: 1
}
let b = {

}
b.__proto__ = a;
delete b.p
console.log(b.p);  // 1