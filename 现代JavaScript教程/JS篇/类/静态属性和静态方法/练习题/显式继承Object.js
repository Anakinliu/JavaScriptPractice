// class Rabbit {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let rab = new Rabbit("sss");
// console.log(rab.hasOwnProperty("name"));

class Rabbit extends Object {
    // 派生类的 constructor 在显式定义时必须调用
    //  super() 。否则 "this" 不会被定义
    constructor(name) {
        super()
        this.name = name;
    }
}

let rab = new Rabbit("sss");
console.log(rab.hasOwnProperty("name"));