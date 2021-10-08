function* gen() {
    const n1 = yield 1;
    console.log('n1: ', n1);
    const n2 = yield 2;
    console.log('n2: ', n2);
}

const g = gen();
// 1. 第一次传值是无效的
console.log(g.next(123));
// 2. next传值时,先右边yield,然后左边接收参数
console.log(g.next(456));
console.log(g.next(789));