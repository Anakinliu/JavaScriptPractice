// 定义类时,为类的属性或者方法定义泛型类型,创建类的实例时,指定特定类型
class G<T> {
    add: (x: T, y: T) => T = function (x, y) {
        let res: T = x;
        // return x + y;
        return res;
    }
}