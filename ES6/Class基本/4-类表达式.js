let Animal = class DW {
    constructor() {
        
    }
    getClassName() {
        // return DW.name;  // DW
        // name属性总是返回紧跟在class关键字后面的类名。
        return Animal.name;  // DW
    }
}

// let Dog = new DW();
let Cat = new Animal();
console.log(Cat.getClassName());