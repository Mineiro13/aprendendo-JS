function pessoaNome (nome){
    return  `olá ${nome}!`;
}
const Ana = "ana";
const saudaçao = pessoaNome (Ana);
 console.log(saudaçao);
 

function verificarIdade (idade) {
    if (idade >= 18){
        return "Maior de idade!"
    }else{
        return "Menor de idade!"
    }
}
    console.log(verificarIdade(28));
    console.log(verificarIdade(10));
    
// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma
// de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso
// contrário. Imprima o resultado no console.
 
    function verificaPalindromo(string) {
        const stringInvertida = string.split('').reverse().join('');
        return string.toLowerCase() === stringInvertida.toLowerCase();
    }
    
    console.log(verificaPalindromo("arara")); // true
    console.log(verificaPalindromo("Frase")); // false  
    
// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize
//estruturas condicionais(if, else)para comparar os valores e determinar o maior.Imprima o maior valor no console

 function Numeros( num1,num2,num3 ) {
     let maior = num1
   if (num2 > maior) {
     maior = num2;
 } 
 if ( num3 > maior){
     maior = num3;
  } 

 return  maior;
}
console.log(Numeros(12,60,50));

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
// A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = ( base,expoente) =>{
 return Math.pow (base,expoente);
};
const base = 3;
const expoente = 4;

const resultado = calculaPotencia (base,expoente);
    console.log(`o resultado da base ${base} elevado ao expoente ${expoente} é ${resultado}`);
    


 