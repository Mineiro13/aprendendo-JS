const valor = 50;
const texto = valor < 50 ? "valor insuficiente" : "valor sufuciente";
   console.log(texto); // retorna "valor suficiente"

   //    condição ?      caso 'true'     :     caso 'false'
   //    valor < 50  ? 'valor insuficiente' : 'valor suficiente';

let MatriculaAtiva = true;

 function VerificarMatriculaAtiva() {
    if (MatriculaAtiva === true){
        return "matricula ativa no sistema";
    } else {
        return "matricula inativa no sistema";
    }
 }
 console.log(VerificarMatriculaAtiva()); // retorna 'matrícula ativa no sistema'

 //   //   //  //  //  //  //  //  //  //  //  //  //  //  // //  // 
       
    // o mesmo codigo, porem usando o operador ternario:
 
let Matriculaativa = true;
  
  function VerificarmatriculaAtiva() {
    return Matriculaativa ? "matricula ativa no sistema" : "matricuça inativa no sistema";
  }
  console.log(VerificarmatriculaAtiva());

  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  // // // //  //  // //
  
let IdadeEstudante = 16;
let PrecisaDeAutorizacao;

if (IdadeEstudante < 18) {
    PrecisaDeAutorizacao = true;
} else {
    PrecisaDeAutorizacao = false;
}
   console.log(PrecisaDeAutorizacao);

 //    usando o operador ternario:
 
 let Idadeestudante = 16;
 
 const PrecisaDEautorizacao = Idadeestudante < 18 ? true : false ;

     console.log(PrecisaDEautorizacao);
     