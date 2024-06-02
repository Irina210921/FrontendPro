
const menu = document.getElementById('menu');


menu.addEventListener('click', (event)=> {
    if (event.target.dataset.counter != undefined) {
        event.target.value++;
    }
        console.log('відслідковую кліки ')

    })












