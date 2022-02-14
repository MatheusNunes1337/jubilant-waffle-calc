class Calculator {
    static add(valueOne, valueTwo){
        let sum = valueOne + valueTwo;
        return sum;
    }
}

const soma = Calculator.add(1,2);
console.log(soma);
