function string2int(s) {

    arr = s.split('');
    arr = arr.map(function)
    console.log(arr);
    return arr.reduce(function (x,y) {
        console.log('used');
        return (x-0) * 10 + (y-0);
}); 
}

console.log(string2int('0'));
console.log('0' - 0);