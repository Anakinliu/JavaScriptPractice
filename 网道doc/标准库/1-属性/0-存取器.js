var person = {
    get age() {
      return 'age is ' + this.age;
    },
    set setAge(value) {
      console.log('setter: ' + value);
      this.age = value;
    }
  };

console.log(person.getAge());
console.log(person.setAge(99));
console.log(person.age);
console.log();
console.log('DONE');