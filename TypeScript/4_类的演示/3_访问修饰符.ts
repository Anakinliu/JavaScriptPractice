// 默认为public
class Access {
    public age: number = 123;
    protected name: string = '类';
    private id:number = 999;
    // private constructor() {
    //     // 这样就无法new了
    // }
    // protected constructor() {
    //     // 这样也无法new
    // }
}

let acc = new Access();
console.log(acc.age);
// console.log(acc.name);

