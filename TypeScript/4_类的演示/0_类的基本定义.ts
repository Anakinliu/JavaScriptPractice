class A {
    // 属性必须在声明时初始化,或者在构造器中初始化
    age: number
    id:number

    // 构造器中使用的属性必须在类中声明,就像Java一样
    constructor() {
        this.age = 123;
        this.id = 123;
    }

    log() {
        console.log(`年龄${this.age},ID:${this.id}`);
    }

}

let a = new A();
a.log()