const PrimeiroBi = 10;
const SegundoBi = 5.5;
const TerceiroBi = 4;
const QuartoBi = 9;

let media = (PrimeiroBi + SegundoBi + TerceiroBi + QuartoBi) /4  ;
  if (media >= 7) {
      media += media * 0.1;
  }

  
    

console.log(`A média é: ${media.toFixed(2)}`);