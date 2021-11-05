function work(oth: string | number): string | number {
    // 不能简单地写oth+2,要明确返回的类型 
    // return oth + 2;
    
    if (typeof oth === 'string') {
        return oth + 2;
    } else {
        return oth + 2;
    }
}

let x: string | number = 2;
console.log(x + 2);
