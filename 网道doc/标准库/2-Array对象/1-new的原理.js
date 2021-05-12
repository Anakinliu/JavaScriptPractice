function Vehicle() {
  this.price = 1000;
  
};

Vehicle.prototype.run = function() {
    console.log('正在跑着。。。');
}

let car = new Vehicle();

// let car = {};
// car.__proto__.prototype = Vehicle.prototype;
// Vehicle.call(car);
// console.log(car);
// console.dir(car);
// console.log();

console.log(car.price);
car.run();

