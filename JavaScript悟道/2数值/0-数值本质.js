// 解析一个数值在JS内的内在表示
function deconstruct(number) {
    // 数值 = 符号位 * 系数 * (2 ** 指数)
    let sign = 1;  // 符号位
    let coefficient = number;  // 系数
    let exponent = 0;  // 2 ** 指数
    if (coefficient < 0) {
        coefficient = -coefficient;
        sign = -1;
    }
    if (Number.isFinite(number) && number !== 0) {
        exponent = -1128;
        let reduction = coefficient;
        // 系数不断除2,直到趋近于0为止,将除2次数与-1128相加,结果即变量exp的值
        while (reduction !== 0) {
            exponent += 1;
            reduction /= 2;
        }

        reduction = exponent;
        // 当指数为0时,可以认为这个值是整数了.
        while (reduction > 0) {
            coefficient /= 2;
            reduction -= 1;
        }
        while (reduction < 0) {
            coefficient *= 2;
            reduction += 1;
        }
        return {
            sign, coefficient, exponent, number
        }
    }
}