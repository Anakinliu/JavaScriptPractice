var a = 'xyz';
var pp = {
    name:"WWW",
    age:24,
    nick:a,
    birth:1999,
    '8hidden':'******',
    3.14:'PI'
};
console.log(pp);
console.log(pp.birth)
console.log(pp.hidden)
console.log(pp['8hidden'])
console.log(pp['name'])
console.log('age' in pp);
console.log('toString' in pp);
console.log(pp.hasOwnProperty('name'));
console.log(pp.hasOwnProperty('toString'));
console.log(pp['7']);
console.log(pp["3.14"]);
console.log(1/0);
if (1/0) {
    console.log('IS TRUE');
}

// ES 6 新增MAP