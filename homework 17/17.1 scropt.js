 class Calculator {

     constructor(a, b) {
         this.a = a;
         this.b = b;
     }

     add(a, b) {
        let total =  a + b;
        return total;
     }
     subtract(a, b) {
         let difference = a - b;
         return difference;
     }
    multiply(a, b) {
        let multiplication = a * b;
        return multiplication;
     }

     divide(a, b) {
         let division = a / b;
         return division;
     }

 }
 const calc = new Calculator();

 console.log(calc.add(5,3));
 console.log(calc.subtract(10,4));
 console.log(calc.multiply(3,6));
 console.log(calc.divide(8,2));


