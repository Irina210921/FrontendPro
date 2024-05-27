
todo.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let list = event.target.closest('.list');
    list.remove();
};


const task = document.getElementById('task');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');

function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;
        task.appendChild(listItem);
        itemInput.value = '';
    }
}


addButton.addEventListener('click', addItem);

itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});