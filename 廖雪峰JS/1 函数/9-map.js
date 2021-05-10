// let a = [2,'3','0xff'];
// let res = a.map(Number).map(Math.pow);
// console.log(res);

function string2int(s) {
    function num(a) {
        return a - 0;
    }
    a = s.split('');
    a = a.map(num);
    return a.reduce(function(a1,a2) {
        return a1*10 + a2;
    });
}

// console.log(string2int('123'));
var arr = ['1', '2', '3'];
console.log(arr.map(parseInt));