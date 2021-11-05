function test(id: number): number {
    return 1;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
}

let myAdd2: (x: number, y: number) => number = function (x, y) {
    return x + y;
}

test(1)
