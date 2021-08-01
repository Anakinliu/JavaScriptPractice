function dd(a, b, c = show()) {

}

function show() {
    console.log("请提供三个参数");
}

dd(1); // 请提供三个参数
dd(1, 2); // 请提供三个参数
dd(1, 2, 3);