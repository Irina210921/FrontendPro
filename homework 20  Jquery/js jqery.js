$(function(){

    function Todo(elem) {
        this.todoListUl = elem.find('.js-todos-wrapper');
        this.input = elem.find('.form__input');
        this.button = elem.find('.form__btn');


        let that = this;

        this.input.on('input', function () {
            that.button.prop('disabled', !this.value);
        });

        this.button.on('click', function () {
            let val = that.input.val();
            if (val) {
                that.addItem(val);
                that.input.val('');
                that.button.prop('disabled', true);
            }
        });
        this.todoListUl.on('click', '.js-todos-wrapper-item', function () {
            let COMPLETED_CLASS = 'js-todos-wrapper-item_completed_yes';
            let item = $(this);

            item.hasClass(COMPLETED_CLASS) ?
                item.removeClass(COMPLETED_CLASS) :
                item.addClass(COMPLETED_CLASS);
        });

        this.todoListUl.on('click', '.todo-item__delete', function (e) {

            $(this).closest('.todo-item').remove();
        });
    }


    Todo.prototype.addItem = function (text, isCompleted) {

        let item = $(
            '<li class="todo-item">' +
            '<input type="checkbox">' +
            '<span class="todo-item__description">Text</span>' +
            '<button class="todo-item__delete">Видалити</button>' +
            '</li>'
        );


        if (isCompleted) {

            item.addClass('js-todos-wrapper-item_completed_yes');
        }


        item.find('.todo-item__description').text(text);


        this.todoListUl.append(item);

    }


    let todo = new Todo($('#todo'));
});












