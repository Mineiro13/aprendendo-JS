 // parametros / argumentos
 // retorno

 function exibeInfoEstudantes( nome, nota){
    return `o nome é ${nome} e a nota é ${nota}`;
 }

    console.log(exibeInfoEstudantes("Eduardo" , 10 ));
    console.log(exibeInfoEstudantes("Clemente" , 9 ));

    // // // // // // // // // // // // // // // // // // // // // // // // //
    
function somarDoisNumeros(numA, numB ) {
    return numA + numB;
}

somarDoisNumeros(8 , 8 );

const resultado1 = somarDoisNumeros(8,8);
     console.log(resultado1);

// // // // // // // // // // // // // // // // // // // // // // // // // // 

function dividir ( dividendo,divisor ) {
    return dividendo / divisor;
}
// eu poderia tbm atribuir uma funçao pra nao precisar por o dividir no .log... : const resultado = (dividir(50,5));
console.log(dividir( 50,5)); 

function dividir1 ( dividendo,divisor){
    if (divisor !== 0){
       return dividendo/divisor;
    } else{
      return "favor nao dividir por 0"
    }
} 
    
    const resultado2 = dividir1( 10,2 );
       console.log(resultado2);
    const resultadoZero = dividir1 ( 10,0 );
       console.log(resultadoZero);
       