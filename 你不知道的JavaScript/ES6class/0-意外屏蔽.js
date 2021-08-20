class Domb {
    constructor(hello) {
        this.hello = hello;
    }

    hello() {
        console.log('滚单');
    }
}
let d = new Domb('嗨喽')
d.hello()// TypeError