
const input = document.querySelector('.form__input');
const todoListUl = document.querySelector('.js-todos-wrapper');
const button = document.querySelector('.form__btn');

let todos =[];
function toLocal(){
    todos = todoListUl.innerHTML;
    localStorage.setItem('todos', todos);
}

    button.addEventListener("click", () => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        const btnDelete = document.createElement('button');
        li.innerText = input.value;
        todoListUl.appendChild(li);
        li.appendChild(btnDelete);
        btnDelete.innerText = 'Видалити';

        input.value = ""
        input.focus()
        toLocal();



    btnDelete.addEventListener('click', () =>{
        todoListUl.removeChild(li);
        toLocal();
    })

        li.addEventListener('click', (e) =>{
            li.classList.toggle('li-active');
            toLocal();
        })
})
if (localStorage.getItem('todos')){
    todoListUl.innerHTML = localStorage.getItem('todos')
}





