class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    button1() {
        alert('натиснута кнопка1');
    }

    button2() {
        alert('натиснута кнопка 2');
    }

    button3() {
        alert('натиснута кнопка 3');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(menu);


