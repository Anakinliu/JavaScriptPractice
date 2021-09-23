class Animal {
    constructor(type) {
        this.animalType = type;
    }
    getAnimalType() {
        console.log('this.animalType: ', this.animalType);
    }
}

let cat = new Animal('cat')
for (var each of Object.getOwnPropertySymbols(cat)) {
    console.log(each);
}