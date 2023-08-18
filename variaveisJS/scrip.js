//bolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = "Joao";
console.log(typeof(nome));

let variavel1 = 9;
variavel1 = 1;
console.log(variavel1);

//constante
const PI = 3.14;
//causaria erro PI = 3.55
console.log(PI);

//escopo global e local
var escopoGlobal = "Global";
console.log(escopoGlobal);
function escopoLocal(){
    let escopoLocal = "Local";
    console.log(escopoLocal);
}

escopoLocal();

//atribuição
var atribuição = 2;

//comparação

console.log(numeroQualquer == variavel1);

//comparação identica
var variavel2 = "1";
console.log(variavel2===numeroQualquer);


//adição, subtração, divisão, multiplicação, resto de divisão e potenciação
var numero1 = 5;
var numero2 = 10;
console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1/numero2);
console.log(numero1*numero2);
console.log(numero2%numero1);
console.log(numero1**numero2);


//relacionais
console.log(numero1>numero2);
console.log(numero1<numero2);
console.log(numero1 == numero2);
console.log("-----------------------");

//operadores logicos
var e = true && false;
console.log(e);

e = true || false;
console.log(e);

e= !false;
console.log(e);