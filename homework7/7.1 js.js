
let add = function () {
    let res = 0;
    return function(x) {
        res += x;
        return res;
    }
};

        let sum = add();
        console.log(sum(4))
        console.log(sum(6))
        console.log(sum(10))
        console.log(sum(7))