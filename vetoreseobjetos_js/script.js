//declaração
let array1= ["Nome", "Idade", "CPF"];
console.log(array1[2],array1[0]);

console.log("__________________________________");



//para cada item no array, é impresso seu conteudo e indice
array1.forEach(function(item, indice){
    console.log(item, indice);
})
console.log("___________________________________________________");
array1.forEach(function(item, indice){
    console.log("Segundo array " + item, indice);

})


//adiciona um dado no final do array
array1.push("novo item","segundo novo item");
console.log(array1);
console.log("___________________________________________________");

//remove um dado no final do array
array1.pop();
console.log(array1);
console.log("___________________________________________________");

//remove o valor inicial do array
array1.shift();
console.log(array1);
console.log("___________________________________________________");

//adiciona um item no inicio
array1.unshift("valor modificado");
console.log(array1);
console.log("___________________________________________________");

//retorna o indice de um valor
console.log(array1.indexOf("CPF"));
console.log(array1.indexOf("novo item"));
console.log("___________________________________________________");

/*remove ou substiui um item pelo indice
array1.splice(0,2);
console.log(array1);*/

//retorna uma parte do array existente
let novoArray = array1.slice(0,2);
console.log(novoArray);
console.log("___________________________________________________");

//criando um objeto
let objeto = {string: "texto", numero:1, booleano: true, array:["lista",54, "nome"], objetoInterno:{objetoInterno:"objeto interno"} };
console.log(objeto.booleano, objeto.numero);
console.log("___________________________________________________");

//desestruturação
var string = objeto.string;
console.log(string);
var arrayInterno = objeto.array;
console.log(arrayInterno);

var {string,booleano} = objeto;