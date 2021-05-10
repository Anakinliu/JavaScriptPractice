function fff(a, b, f) {
    return f(a - b);
}

console.log(fff(-1, 3, Math.abs));
