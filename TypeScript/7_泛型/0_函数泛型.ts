function createArray<T>(value: T, count: number) {
    let arr: Array < T > = [];
    return arr;
}

// 可以设置多个泛型
function swap<k, v>(a: k, b: v): [k, v] {
    return [a, b];
}