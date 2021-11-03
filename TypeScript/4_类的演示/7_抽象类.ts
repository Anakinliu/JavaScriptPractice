abtract ass Knowlege {
    time: number;
    constructor(time:number) {
        this.time = time;
    }
    abstract learn(): void;
    method() {
        console.log('听说读写');
    }
}

class Book extends Knowledge {
    learn(): void {
        console.log('看书'); 
    }
    constructor(time:number, name:string) {
        super(time)
    }
}

let book = new Book(12, 'JavaScript');
book.method()
book.learn()