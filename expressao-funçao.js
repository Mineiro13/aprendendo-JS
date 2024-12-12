 const estudanteReprovou = function ( notaFinal, Faltas ) {
    if (notaFinal < 8 && Faltas > 5) {
        return true;
    } else {
        return false;
    }
} 
    console.log(estudanteReprovou( 7,6));
    console.log(estudanteReprovou( 8,5));
 // hoisting caso o console.log esteja em cima da function!