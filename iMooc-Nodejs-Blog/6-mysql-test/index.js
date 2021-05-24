const MySql = require('mysql');

// 创建连接
const con = MySql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'NoPass123',
    database : 'myblog',
    port: '3306'
})

// 建立连接
con.connect();

// 创建sql语句
// const sql = 'select * from blogtable;';
// const sql = 'UPDATE blogtable set title="title6-6" WHERE id = 1';
const sql = "INSERT INTO blogtable(title, content, author, createtime) values ('title9-9', '内容666', '1234567891', 1621345783051) ";
// const sql = "DELETE FROM blogtable WHERE id = 2";

// 执行查询
con.query(sql, (error, results, fields) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('results: ', results);
    // console.log('fields: ', fields);
})

// 关闭连接
con.end();
console.log('连接已关闭');

