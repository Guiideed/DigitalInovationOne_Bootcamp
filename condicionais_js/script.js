let jogador1 = 2;
let jogador2 = 0;
let placar;

//if elseif
if(jogador1>0 && jogador2 ==0){
    console.log("Jogador 1 marcou ponto");
    placar = jogador1>jogador2;
}else if(jogador2>0 && jogador1==0){
    console.log("Jogador 2 marcou ponto");
    placar = jogador2>jogador1;
}else{
    console.log("Ningem marcou ponto");
}
console.log( placar, "_________________________________________________");


//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores inválidos");

//switch  case

switch(placar){
    case placar = jogador1 > jogador2:
        console.log("jogador 1 ganhou");
        break;

    case placar = jogador1<jogador2:
        console.log("jogador 2 ganhou");
        break;
    default:
        console.log("Empate");
}




//repetição
let array = ['valor', 'valor2', 'valor3', 'valor4', 'valor5'];
let objeto = {cor: 'azul', tamanho: 'grande',largura: 'grande'}

//for executa a instrução até que seja falsa
for(let i =0; i<array.length;i++){
    console.log(i);
}

//for in repetição a partir de uma propriedade
for( i in array){
    console.log(i);
}
for(i in objeto){
    console.log(i);
}

//for of repetição a partir do valor
for(i of array){
    console.log(i);
}
//vai imprimir letra por letra
for(i of objeto.cor){
    console.log(i);
}

//while 
let a = 0;
while(a<10){
    a++;
    console.log(a);
}
do{
    a++;
    console.log(a);
}while(a<10);

