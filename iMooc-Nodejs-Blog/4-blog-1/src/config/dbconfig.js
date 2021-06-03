const currentEnv = process.env.NODE_ENV

let MYSQL_CONFIG;
let REDIS_CONFIG;
if (currentEnv === 'dev') {
    // 开发时期的数据库配置
    MYSQL_CONFIG = {
        host     : 'localhost',
        user     : 'root',
        password : 'NoPass123',
        database : 'myblog',
        port: '3306'
    };

    REDIS_CONFIG = {
        port: 6379,
        host: '127.0.0.1'
    }

}

if (currentEnv === 'production') {
    // 线上数据库配置
    MYSQL_CONFIG = {
        host     : 'localhost',
        user     : 'root',
        password : 'NoPass123',
        database : 'myblog',
        port: '3306'
    };

    REDIS_CONFIG = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONFIG,
    REDIS_CONFIG
}