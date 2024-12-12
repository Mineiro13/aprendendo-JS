// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.

const frase = "Esta é uma frase de exemplo.";
console.log(frase.length);
console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const ValorNull = null;
     console.log(ValorNull);
let ValorUndefined;
     console.log(ValorUndefined);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.    

const Number = 90;
const Rifa = "rifa";
const boolean = true;

const sorteio = (`o numero ${Number} da ${Rifa} foi o premiado ${boolean}`);
      console.log(sorteio);
      
 