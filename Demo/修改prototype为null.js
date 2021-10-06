function AA() {

}
AA.prototype.say = 999;
AA.prototype = null;

let a = new AA();

