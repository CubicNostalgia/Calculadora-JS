const readline = require('readline');
const calc = require('./modulos/calculadora'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tratarNumero(input) {
    if (!input.trim()) throw new Error("Entrada de dados vazia."); 
    
    let formatado = input.replace(',', '.'); 

    if ((formatado.match(/\./g) || []).length > 1) {
        throw new Error("Apenas um ponto ou virgula e permitido.");
    }

    let num = Number(formatado);
    if (isNaN(num)) throw new Error("Entrada deve conter apenas numeros."); 
    return num;
}

function executarCalculadora() {
    //Solicita dois números e a operação
    rl.question("Digite o primeiro número: ", (n1_raw) => {
        rl.question("Digite o segundo número: ", (n2_raw) => {
            rl.question("Informe a operação (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR): ", (op_raw) => {
                try {
                    const n1 = tratarNumero(n1_raw);
                    const n2 = tratarNumero(n2_raw);
                    const operacao = op_raw.toUpperCase();

                    let resultado;
                    switch (operacao) {
                        case 'SOMAR': resultado = calc.somar(n1, n2); break;
                        case 'SUBTRAIR': resultado = calc.subtrair(n1, n2); break;
                        case 'MULTIPLICAR': resultado = calc.multiplicar(n1, n2); break;
                        case 'DIVIDIR': resultado = calc.dividir(n1, n2); break;
                        //Valida operações solicitadas
                        default: throw new Error("Operacao invalida."); 
                    }

                    console.log(`\nResultado Final: ${resultado.toFixed(2)}`);

                } catch (error) {
                    console.log(`\n[ERRO] ${error.message}`); 
                } finally {
                    rl.close();
                }
            });
        });
    });
}

console.log("--- Calculos SA: Sistema Iniciado ---");
executarCalculadora();