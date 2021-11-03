class Person {
    firstName: string = 'A';
    lastName: string = 'B';   
    get fullName() {
        return `${this.firstName}${this.lastName}`
    }
    set fullName(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

const person = new Person();
console.log(person.fullName);

person.fullName = 'Lim Tom';
console.log(person.fullName);
