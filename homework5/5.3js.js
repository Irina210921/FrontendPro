let num = prompt('Введіть ціле число');
console.log(num);


for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square > num) {
        break;
    }
    else {
        console.log (i);
    }
}