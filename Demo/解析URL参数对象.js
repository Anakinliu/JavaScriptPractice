function parseURL(url) {
    const paramsStr = /.+\?(.+)/g.exec(url)[1];
    // 拿到问号后面的一串参数字符串

    const paramArr = paramsStr.split("&");
    let paramsObj = {};

    // console.log(paramsStr);
    paramArr.forEach(param => {
        if (/=/.test(param)) {
            let [key, val] = param.split("=");
            val = decodeURIComponent(val);  // 解码,UIL中只有ASCII字符
            val = /^\d+$/.test(val) ? parseFloat(val) : val;
            if (paramsObj.hasOwnProperty(key)) {  // 已经有key,变为一个数组,追加val
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else {
                paramsObj[key] = val;
            }
        } else {  // 只有key, 没有value的参数
            paramsObj[param] = true;
        }
    })
    console.log(paramsObj);
    return paramsObj;
}
// const url = 'https://www.nowcoder.com/discuss/experience?tagId=644&age=24&ie=99'
const url = 'https://www.google.com/search?q=%E4%B8%AD%E5%9B%BD&newwindow=1&sxsrf=AOaemvLxfDdg2U_82irKrb5Odw5waLc6Ew%3A1632403766428&ei=NoFMYZbEGc2d-gTgqbPICw&oq=%E4%B8%AD%E5%9B%BD&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECdKBAhBGABQl44CWKSZAmC3mgJoAXACeACAAQCIAQCSAQCYAQCgAQGwAQrAAQE&sclient=gws-wiz&ved=0ahUKEwiWt4L1mZXzAhXNjp4KHeDUDLkQ4dUDCA4&uact=5'
parseURL(url)