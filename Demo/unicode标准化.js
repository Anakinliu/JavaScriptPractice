let a = 'A';
console.log(a.normalize());
console.log(a.normalize('NFC'));
console.log(a.normalize('NFD'));
console.log(a.normalize('NFKC'));
console.log(a.normalize('NFKD'));
let b = '😀';
console.log(b.normalize());