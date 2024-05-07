let ladder = {
    step: 0,
    up () { // підніматиме вас на одну сходинку
        this.step++;
        return this;
    },
    up () { // підніматиме вас на одну сходинку
        this.step++;
        return this;
    },
    down () { // опускатиме вас на одну сходинку
        this.step--;
        return this;
    },
    showStep () { // показує поточну сходинку
        alert( this.step );
        return this;
    }
}


ladder.up().up().down().showStep();





