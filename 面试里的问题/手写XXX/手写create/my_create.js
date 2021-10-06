Object.myCreate = function (proto) {
    function fn() { }
    fn.prototype = proto;
    let obj = new fn();
    // let obj = myNew(fn)
    console.log(obj.__proto__);
    // 这个不是多余的,不然null作为proto会与Object.create不同,造成obj.__proto__ === Object.prototype
    if (proto === null) {
        Object.setPrototypeOf(obj, null);
    }
    return obj;
}


oco = Object.myCreate({ age: 999 });   // create a normal object
ocn = Object.myCreate(null); // create a "null" object
// console.log(oco)
// console.log(ocn)
// oco.p = 1; // create a simple property on normal obj
// ocn.p = 0; // create a simple property on "null" obj
// console.log(oco)
// console.log(ocn)
// console.log(oco.toString());
// console.log(ocn.toString());