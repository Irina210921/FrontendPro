const button = document.getElementById('change_color_button');
button.addEventListener('click',function (){
    const h1 = document.querySelector('h1');

        h1.style.color = h1.style.color === 'red' ? 'blue': 'red';


});
