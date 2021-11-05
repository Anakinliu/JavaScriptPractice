interface Animal {
    weight:number
    eat():void
    move(): void
    add (x: number|string, y: number|string): number|string
}

class Human implements Animal {
    weight: number;

    constructor(weight:number) {
        this.weight = weight
    }

    add(x: string|number, y: string|number): string | number {
        throw new Error("Method not implemented.");
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

}

let me: Programmer = new Programmer(99);
me.program()
me.move()
me.eat()