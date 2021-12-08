// ES规范中,symbol不存在字面量形式,symbole类型只能通过Symbol()和Symbol.for()来创建or引用
const key: symbol = Symbol('yyds');
// TS中,引入unique symbol类型,是一种字面量
// 主要用在接口or类中的可计算属性名
const tskey: unique symbol = Symbol('233');
interface obj{
    [tskey]: string;
}
// ES的symbol不能用作字面量
// interface cant{
//     [key]: string;
// }

// unique symbol类型只能是const或者readonly声明

// 由于Symbol.for函数,可能存在TS认为不同却实际相同
const a: unique symbol = Symbol.for('cs')
const b: unique symbol = Symbol.for('cs')

