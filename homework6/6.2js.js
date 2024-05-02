
const array = [1, 2, 'a', 4, 'b'];

    const newArray = array.filter(function (item){
        return item === +item
    })
            console.log(newArray);
        function arithmeticMean(){
            let sum = 0

            for (let i = 0; i < newArray.length; i++){
                sum += newArray[i];
            }
        return sum/newArray.length
        }
            console.log(arithmeticMean());




















