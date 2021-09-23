var x = 200;
obj = {
    x: 300,
    fn: function () {
        console.log(this.x);

        function fn2() {
            console.log(this);
            console.log(this.x);
        }
        fn2()
    }
}
obj.fn()