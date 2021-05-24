class Animal {
    constructor(n) {
        this.name = n;
    }

    bark() {
        console.log('叫' + this.name);
    }
}

class Dog extends Animal{
    constructor(n) {
        super(n);
    }
}

class Cat extends Animal {
    // constructor(n) {
    //     super(n);
    // }
}
new Dog(2).bark();
new Cat(3).bark();