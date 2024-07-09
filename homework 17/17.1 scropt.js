 class Calculator {

     constructor(a, b) {
         this.a = a;
         this.b = b;
     }

     get add() {
         return this.calcAdd();
     }
     calcAdd() {
         return this.a + this.b;
     }

     get subtract() {
         return this.calcSubtract();
     }
     calcSubtract() {
         return this.a - this.b;
     }
     get multiply() {
         return this.calcMultiply();
     }
     calcMultiply() {
         return this.a * this.b;
     }
     get divide() {
         return this.calcDivide();
     }
     calcDivide() {
         return this.a / this.b;
     }

 }
 const calc = new Calculator(5,3);

 console.log(calc.add);
 console.log(calc.subtract);
 console.log(calc.multiply);
 console.log(calc.divide);


