// 直接写的就是数值型枚举,是number子类型
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up);  // 0
let d: Direction = Direction.Down
console.log(d);// 1

// 可以手动设置枚举值,默认值自动是前面的+1
enum Dir {
    Up = 10,
    Down,
    Left = 50,
    Right
}
console.log(Dir.Down);
console.log(Dir.Right);

// 数值型枚举可以通过枚举的值获取枚举名称
console.log(Dir[Dir.Up]);



