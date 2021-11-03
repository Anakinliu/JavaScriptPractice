class Quick {
    // 不用在构造器外声明了,访问修饰符也要声明
    constructor(public age: number, private name: string) {
        
    }
    
}

let q = new Quick(6665, 'ing');
console.log(q.age);
