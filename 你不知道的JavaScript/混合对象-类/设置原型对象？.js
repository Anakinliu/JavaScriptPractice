const animal = {
    color: 'black',
    bark() {
        console.log(this.color + ' animal bark!');
    }
}

const dog = {

}

console.log(dog.prototype);
dog.prototype = Object.create(animal);

console.log(dog.prototype);

// console.log(dog.bark());