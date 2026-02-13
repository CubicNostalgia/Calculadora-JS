const calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        //Não permite divisão por "0"
        if (b === 0) {
            throw new Error("Divisao por zero nao permitida.");
        }
        return a / b;
    }
};

module.exports = calculadora;