// 意思是,枚举里面的每个枚举元素都是一种类型,是这个枚举的子类型
enum Game {
    FPS,
    ARPG,
    RTS
}

let g1: Game = Game.FPS;
// 数值型联合枚举
let g2: Game.FPS = Game.FPS;

enum StringGame {
    FPS = 'CS',
    RTS = 'RED ALERT'
}

let sg1: StringGame = StringGame.FPS;
// 字符串联合枚举
let sg2: StringGame.FPS = StringGame.FPS;
