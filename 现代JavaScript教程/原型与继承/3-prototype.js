let animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

// 自动:为新对象设置__proto__为F.prototype
let rab = new Rabbit("bubb");

console.log(rab.eats);