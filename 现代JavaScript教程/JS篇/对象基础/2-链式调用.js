let l = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
    }
}

// l.up();
// l.up();
// l.up();
// l.down();
// l.down();
l.up().up().up().down().down();
l.showStep();