var xiaoming = {
        name: '小明',
        birth: 1990,
        act: function() {
            console.log('xiaoming...',this.birth);
        },
    };

xiaoming.act();
console.log(xiaoming);