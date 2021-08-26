class User {
    constructor(age) {
        this.age = age;
    }

    static show() {
        console.log(this.age);
    }
}

let u = new User(999);
u.show() //  u.show is not a function