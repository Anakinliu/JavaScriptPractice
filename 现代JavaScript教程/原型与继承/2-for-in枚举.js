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

for (let e in admin) {
    console.log(e, admin[e]);
}
console.log("===");
for (let e in admin) {
    if (admin.hasOwnProperty(e)) {
        console.log(e, admin[e]);
    }
}