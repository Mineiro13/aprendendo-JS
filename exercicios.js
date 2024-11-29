//     Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.//

const texto = "ola mundo!";
const number = 13;
const booleano = true;

console.log(texto,number,booleano);

//                Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira
//                variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const primeiroNome = "Eduardo";
const ultimoNome = "Rocha";

const nomeCompleto = (primeiroNome +" " + ultimoNome);  // usando o +
     console.log (nomeCompleto);

const nomeCompletoString = (`olá ${primeiroNome}  ${ultimoNome}!`); // usando template strings
     console.log (nomeCompletoString);

//               Declare duas variáveis, uma contendo um número e outra contendo uma string.
//               Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console

const cliente = "Jose";
const dinheiro = 200;

const resultado = `${cliente},já pode retirar os ${dinheiro} reais.`;
     console.log(resultado);

//      Crie uma variável inicializada com um valor de qualter tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los     

let valor = 10;
     console.log ("primeiro valor:", valor);
    valor = 5;
     console.log("novo valor:", valor);
 
 //   Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro 
 //    do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.   

 var fora = "fora do bloco"; // usando o VAR
      
     if (true) {
    var dentro = "dentro";
 }
   
     console.log (`esta ${dentro} do bloco!`);
     console.log (`esta${fora} do bloco!`);


let ForA = "fora";  // usando LET
     
     if(true) {
        let DentrO = "dentro"
     }
     console.log(`esta ${ForA} do bloco!`);
     console.log(`esta ${DentrO} do bloco!`);

//                    Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional 
//                    (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

 const chuva = true;
     if (chuva){
        console.log("leve um guarda-chuva!");
     } else {
        console.log("o tempo esta bom, nao precisa usar guarda-chuva!");
     }