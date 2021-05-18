const loginCheck = (un, pwd) => {
    // 假数据
    if (un === 'lyq' && pwd === '111') {
        return true;
    }
    return false;
};

module.exports = {
    loginCheck
}
