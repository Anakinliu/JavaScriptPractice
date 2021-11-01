// 接口除了可以定义对象的标准,还可以描述函数类型.
// 函数接口没有方法体,只有函数接口名,参数列表及类型,返回值类型
interface Func {
    // 参数和返回值定义好
    (a:string, b:number): boolean
}

const myFunc: Func = function (a: string, b: number): boolean {
    return true;
}