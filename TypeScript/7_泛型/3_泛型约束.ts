// 泛型可以通过约束来限定为某种类型,T extends 某个类型
interface Num {
    length: number;
}
class GO<T extends Num> {
    add: (x: T, y: T) => void = function (x, y) {
        console.log(x.length);
    }
}