/**
 * 
 * 多态的最根本好处在于，你不必再向对象询问“你是什么类型”而后根据得到的答
案调用对象的某个行为——你只管调用该行为就是了，其他的一切多态机制都会为你安
排妥当。

一个JavaScript 对象，既可以表示Duck 类型的对象，
又可以表示Chicken 类型的对象，
这意味着JavaScript 对象的多态性是与生俱来的。
 */

googleMap = {
    show : function() {
        console.log('渲染谷歌地图');
    }
}

baiduMap = {
    show : function() {
        console.log('渲染百度地图');
    }
}

function renderMap(map) {
    map.show();
}

// 调用时不管什么地图,直接传入
renderMap(googleMap);
renderMap(baiduMap);