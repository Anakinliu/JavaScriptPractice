let user = {
    name: "John",
    surname: "Smith",
    firends: [1, 2],
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    get fri() {
        return this.firends;
    },
    set fri(f) {
        this.firends.push(f);
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
console.log(admin.fri);  // [1,2]
console.log(admin.fri == user.fri);  //true
admin.fri = 3;
console.log(admin.fri, user.fri);
console.log(admin.fri == user.fri);  //true

console.log(admin.fullName);  // John Smith
admin.fullName = "l y q";
console.log(admin.fullName, user.fullName);  // l y John Smith