interface Person {
    age: number;
    brithday: Date;
}

class School {
    static country: string = '中国';

    // 必须在构造器外声明,才可以使用this.xxx
    students: Array<Person>;
    id: number = 10010;
    desc: string;
    
    constructor(student:Person) {
        this.students = [student];
        this.desc = '高中';
    }
    
    log() {
        console.log(this.students[0]);
    }
}

// School.contry:string = '中国'

let p: Person = {
    age: 5,
    brithday: new Date,
}

let univercity = new School(p);
univercity.log()
