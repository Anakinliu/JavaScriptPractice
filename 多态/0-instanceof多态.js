// 体现了多态性
// 每次添加新动物都要添加新的代码
const makeBark = function(animal) {
    if (animal instanceof Chicken) {
        console.log('咯咯咯');
    } else if (animal instanceof Duck) {
        console.log('嘎嘎嘎');
    }
}

function Chicken(){}
function Duck(){}

makeBark(new Chicken());
makeBark(new Duck());