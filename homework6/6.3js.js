

const array = [1, 2, 3, 4, 5, 6];
const removeElement = function (array,item){

        const index = array.indexOf(4);
        const num = array.splice(3,1);
        return array;

}

console.log(removeElement(array,4));




























