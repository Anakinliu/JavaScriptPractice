class Only {
    readonly id: string;
    constructor(id:string) {
        this.id = id;
        this.id = 'sss';
    }
    // 只读属性不能在构造函数以外的函数中修改
    // public changeId(id: string) {
    //     this.id = id;
    // }
}

class NotOnly extends Only {
    constructor(id: string) {
        super(id);
        
    }
}