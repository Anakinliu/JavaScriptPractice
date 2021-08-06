let head = {
    glasses: 1
};
let table = {
    pen: 3
};
let bed = {
    sheet: 1,
    pillow: 2
};
let pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen);
console.log(bed.glasses);