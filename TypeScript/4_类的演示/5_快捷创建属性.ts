class Quick {
    // 不用在构造器外声明了,需要访问修饰符的话也要同时声明
    constructor(public age: number, private name: string, readonly id:number) {
        
    }
    
}

let q = new Quick(6665, 'ing', 1);
console.log(q.age);
