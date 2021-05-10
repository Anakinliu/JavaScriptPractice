function string2int(s) {

    arr = s.split('');
    console.log(arr);
    return arr.reduce(function (x,y) {
        return (x-0) * 10 + (y-0);
}); 
}

console.log(string2int('124'));