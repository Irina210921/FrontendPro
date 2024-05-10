

    function numbEnter (num) {

        do {
            num = prompt("Введіть число більше 100", 0);

        } while (num <= 100 && num) ;
        return num
    }
        console.log(numbEnter());


