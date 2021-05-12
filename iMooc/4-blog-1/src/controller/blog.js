const getList = (author, keyword) => {
    // 一个包含若干个完整博客对象的列表
    return [
        {
            id: 1,
            title: "第一个博客",
            createTime: 1620782276765,
            content: "在编译语言中，常量将在编译时替换,这导致更好的性能。" ,
            author: "小米"

        },
        {
            id: 2,
            title: "第二个博客",
            createTime: 1620782302208,
            content: "在编译语言中，常量将在编译时替换,这导致更好的性能。" ,
            author: "小明"

        }
    ];
}

const getDeatil = (id) => {
    // 先不进行检查和运算，直接返回假数据
    return {
            id: 1,
            title: "第一个博客",
            createTime: 1620782276765,
            content: "在编译语言中，常量将在编译时替换,这导致更好的性能。" ,
            author: "小米"
        };
}

module.exports = {
    getList,
    getDeatil
}