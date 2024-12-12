// 1  Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois 
//    realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando 
//    a função de cada variável criada anteriormente. Exiba os resultados finais no console.

const saldo = 33;
const saque = 28;
const deposito = 25;

const operacao = saldo - saque; 
  const resultado = operacao + deposito;  {
    
  }



  console.log(`seu saldo é de:${saldo}`);
  console.log(`seu saldo depois do saque:${operacao}`);
  console.log(`seu saldo depois do deposito:${resultado}`);


// // // // // // // // // // // // // // // // // // // //

// 2  Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se 
//    esse valor é par ou ímpar. Exiba o resultado no console.

 
const conta = (50 % 2 === 0 ? " par " : "impar");
     console.log(conta);

// // // // // // // // // // // // /// // // // // // // // // //

//  3 Considere uma situação em que você está verificando se um usuário está logado e tem permissão de 
//    administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas 
//    condições e use o operador AND para verificar se ambas são verdadeiras.

const Usuário = true;                   // const Usuário = true;
const Admin = false;                    // const Admin = true;

const  Result = Usuário && Admin;       // const  Result = Usuário && Admin;
     console.log(`Admistrador logado no sistema:${Result}`); // false      //     console.log(Result); // true
     
// // // // /// /// // /// // /// /// //// /// /// /// /// /// /// /// / / / / / / / / / / / //

// 4 Declare duas variáveis booleanas e use o operador OR para verificar
//   se pelo menos uma delas é verdadeira. Exiba o resultado no console.

let abc = true;
let cba = false;

let alfabeto = abc || cba;
    console.log(alfabeto);
    
// // // // // /// // / / / / / / / // / / / / / / / /  / / / / / / / / / / / / / / / / / / / / / // / /     

// 5  Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.
//    Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas
//    condicionais (if, else) para determinar se o usuário pode realizar a compra.

 const IdadeUsuario = 17;
 const IdadeMin = 18;

 if (IdadeUsuario > 18) {
    console.log("Liberado para a compra dos ingressos!");
 } else {
    console.log("Menor de idade, compra indisponivel!".toUpperCase());   
 }