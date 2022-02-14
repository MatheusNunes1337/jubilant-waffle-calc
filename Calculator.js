class Calculator {
    static add(valueOne, valueTwo){
        let sum = valueOne + valueTwo;
        return sum;
    }
    sub(num1, num2) {
        return num1 - num2
    }
}
const soma = Calculator.add(1,2);
console.log(soma);