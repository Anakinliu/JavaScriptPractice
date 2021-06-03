const j = () => (this.prop = {a:1,b:2});
let x = new j();
console.log(x);  // TypeError: j is not a constructor