interface Animal {
    weight:number
    eat():void
    move():void
}

class Human implements Animal {
    weight: number;

    constructor(weight:number) {
        this.weight = weight
    }

    eat(): void {
        console.log('human eat');
        
    }

    move(): void {
        console.log('human move');
        
    }
    
}

class Programmer extends Human {

    constructor(weight:number) {
        super(weight);
    }

    program():void {
        console.log('programmer is programming');
        
    }

    // 支持重写
    eat():number {
        console.log('no eat');
        return 2;
    }
    // 不支持重载
    // eat(a,b):number {
    //     console.log('no eat');
    //     return 2;
    // }

}

let me = new Programmer(99);
me.program()
me.move()
me.eat()