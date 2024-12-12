// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
 
const TextoPnumero1 = "10";
const NumeroPtexto1 = 50;

const TextoConvertido1 = Number(NumeroPtexto1);
const NumeroConvertido1 = String(TextoPnumero1);
    console.log("Tipo de dado após conversão de número para string:",typeof NumeroConvertido1);
    console.log("Tipo de dado após conversão de número para string:", typeof TextoConvertido1);
    
// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. 
//                                                 Exiba os resultados finais no console.


const texto = "JavaScript é incrível!";

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);