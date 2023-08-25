function calculadora() {
    // Forma de pegar entradas de usuários
    let operacao = Number(prompt("Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Divisão inteira (%)"));
    
    if(!operacao||operacao>=6){
        alert("operação inválida");
        calculadora();
    }else{let n1 = Number(prompt("Insira o primeiro valor"));
    let n2 = Number(prompt("Insira o segundo valor"));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(n1 + " + " + n2 + " = " + resultado);
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(n1 + " - " + n2 + " = " + resultado);
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(n1 + " * " + n2 + " = " + resultado);
    }
    function divisao() {
        resultado = n1 / n2;
        alert(n1 + " / " + n2 + " = " + resultado);
    }
    function divInteira() {
        resultado = n1 % n2;
        alert(n1 + " % " + n2 + " = " + resultado);
    }

    if (operacao === 1) {
        soma();
    } else if (operacao === 2) {
        subtracao();
    } else if (operacao === 3) {
        multiplicacao();
    } else if (operacao === 4) {
        divisao();
    } else if (operacao === 5) {
        divInteira();
    } else {
        alert("Operação inválida");
    }

    novaOperacao(); // Chamar a função para perguntar se deseja fazer outra operação
}



function novaOperacao() {
    let opcao = prompt("Deseja fazer outra operação? (sim/nao)");
    if (opcao === "sim") {
        calculadora();
    } else if (opcao === "nao") {
        alert("Até mais");
    } else {
        alert("Digite um valor válido");
        novaOperacao();
    }
}

calculadora(); // Iniciar o processo
}
    