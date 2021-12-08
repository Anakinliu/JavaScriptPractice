// 字符串枚举不同于数值枚举,需要每个都手抖赋值
enum Direction {
    U = 'Up',
    D = 'Down',
    L = 'Left',
    R = 'Right',
    Z = U
}

let dd:Direction = Direction.U
console.log(dd);
console.log(Direction.Z);

// 字符串枚举类型是字符串类型子类型,可以对string类型赋值
let ssd: string = dd;
console.log(ssd);

// 与数值型枚举不同,字符串枚举不能通过枚举值获取枚举名称
console.log(Direction[Direction.U]);

