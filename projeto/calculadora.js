// calculadora.js

// VARIÁVEIS DE ENTRADA
let numero1 = 10;
let numero2 = 5;
let operador = "/"; // PODE SER "+", "-", "*", "/"

// VARIÁVEL PARA ARMAZENAR O RESULTADO
let resultado;

// ESTRUTURA SWITCH PARA AVALIAR O OPERADOR
switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = (numero2 !== 0) 
            ? numero1 / numero2 
            : "Erro: divisão por zero não é permitida!";
        break;
    default:
        resultado = "Operador inválido!";
        break;
}

// EXIBIR O RESULTADO
console.log(`Resultado: ${resultado}`);
