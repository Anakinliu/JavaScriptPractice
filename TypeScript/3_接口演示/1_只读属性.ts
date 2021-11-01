interface Book {
    readonly tag: string;
    readonly price: number;
    readonly toc?: object;
    discount: number;
}


function checkout(books: Book[]):number {
    let sum: number = 0;
    books.forEach(ele => {
        sum += ele.price * ele.discount;
    })
    return Number(sum.toFixed(2));
}

let books: Book[] = [];
let book1: Book = {
    tag: 'JS',
    price: 99,
    discount: 0.9,
}
// 只读属性不能在定义后再修改值,类似 const
// book1.tag = 'CSS';
let book2: Book = {
    tag: 'CSS',
    price: 59,
    discount: 0.95,
    toc: {a:1,b:2}
}
books.push(book1)
books.push(book2)
book2.toc['a'] = 2;
console.log(checkout(books));
// readonly 是一个属性
// 只用来做一个变量,还是用const合适
