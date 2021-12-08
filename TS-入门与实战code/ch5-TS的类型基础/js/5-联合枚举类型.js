"use strict";
// 意思是,枚举里面的每个枚举元素都是一种类型,是这个枚举的子类型
var Game;
(function (Game) {
    Game[Game["FPS"] = 0] = "FPS";
    Game[Game["ARPG"] = 1] = "ARPG";
    Game[Game["RTS"] = 2] = "RTS";
})(Game || (Game = {}));
let g1 = Game.FPS;
// 数值型联合枚举
let g2 = Game.FPS;
var StringGame;
(function (StringGame) {
    StringGame["FPS"] = "CS";
    StringGame["RTS"] = "RED ALERT";
})(StringGame || (StringGame = {}));
let sg1 = StringGame.FPS;
// 字符串联合枚举
let sg2 = StringGame.FPS;
