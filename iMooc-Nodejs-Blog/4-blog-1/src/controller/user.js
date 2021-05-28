const {execSql} = require('../db/mysql');

const loginCheck = (un, pwd) => {
    // 假数据
    // if (un === 'lyq' && pwd === '111') {
    //     return true;
    // }
    const sql = `
        SELECT username, realname FROM usertable WHERE username="${un}" AND password="${pwd}"
    `;
    return execSql(sql).then(sqlResult => {
        console.log('sqlResult[0] ', sqlResult[0]);
        return sqlResult[0] || {};
    })
};

module.exports = {
    loginCheck
}
