const mysql = require('mysql')

const { MYSQL_CONFIG } = require('../config/dbconfig');

// console.log(MYSQL_CONFIG);
// 创建连接
const con = mysql.createConnection(MYSQL_CONFIG);

// 建立连接
con.connect()

// 查询函数
function execSql(sql) {
    return new Promise((resolve, reject) => {
        // 执行查询
        con.query(sql, (error, results, fields) => {
            if (error) {
                // console.log(error);
                // throw error;
                reject(error);
                return
            }
            resolve(results);
            // console.log('results: ', results);
            // console.log('fields: ', fields);
        })
    });
}

module.exports = {execSql};