import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuscule'
})
export class TypeCongePipe implements PipeTransform {

  transform(value: string, args?: any): any {

  if(value == "CONGE_PAYE"){
       
      return "Congé payé";

  } else if(value == "CONGE_SANS_SOLDE"){
      
     return "Congé sans solde";

  } else if(value == "EN_ATTENTE_VALIDATION"){

     return "En attente de validation";

  } else if(value == "VALIDEE"){

    return "Validée";

  } else if(value == "INITIALE"){
    
    return "Initiale";
  }

  return value;
 }


}
