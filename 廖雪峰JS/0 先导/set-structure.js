s = new Set([1,2,3,"3"])
console.log(s);
s.add(1);
s.delete(3);
console.log(s);
// iterator语法
for (var v of s) {
    console.log(v);
}