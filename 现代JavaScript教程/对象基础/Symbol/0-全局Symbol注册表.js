let id = 'id-123';
let user = {
    [Symbol.for(id)]: "我是ID",
}
user[Symbol.for(id)]; // "我是ID"

console.log(Symbol.keyFor(Symbol.for(id)));

