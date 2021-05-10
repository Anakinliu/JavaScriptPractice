m1 = new Map();
m1.set('8xing', 123);
m1.set('self', [1,2,3]);

// 应该是属性而不是键值对了
m1.pro = '666';  // 赋值方式1
m1['plus'] = '233'; //赋值方法2写入
console.log(m1);

m1.delete('8xing'); // 删除一个键值对
// delete m1['self'];  // 这是删除属性的写法
console.log(m1);
/*
Map {
  '8xing' => 123,
  'self' => [ 1, 2, 3, 4, 'g' ],
  pro: '666',
  plus: '233'
}
*/
console.log(m1.pro);
console.log(m1.plus);
console.log(m1.hasOwnProperty('pro'));
console.log(m1.hasOwnProperty('plus'));
delete m1.pro
console.log(m1.hasOwnProperty('pro'));
console.log(m1.hasOwnProperty('plus'));


