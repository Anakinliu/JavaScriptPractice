interface People {
    // 1234
    height: number;
    weight: number;
    birth: Date;
    move(): void;
}
// 不会在编译后的JS文件中显示

function printPeople(p: People) {
    console.log('身高 ', p.height);
    console.log('体重', p.weight);
    console.log('生日', p.birth);
}

let person: People = {
    height: 123,
    weight: 60,
    birth: new Date,
}

printPeople(person);
