class Basic {
    age: number = 9
    say() {
        console.log('Basic ', this.age);  
    }
    getAge():number {
        return this.age;
    }
}

class More extends Basic {
    time: number = 2022;
    say() {
        console.log('More ', this.time);
        
    }
    date() {
        console.log(`${this.time} + ${super.getAge()}`);
    }
}

let t: Basic = new More();
t.say();
