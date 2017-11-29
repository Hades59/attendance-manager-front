import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    console.log(value);

    let moisNumber = value.getMonth()+1;// Renvoie le mois (0-11)
    let year = value.getFullYear()
    let mois = moisNumber < 10 ? "0"+moisNumber : moisNumber;
    let day = value.getDate() < 10 ? "0"+value.getDate() : value.getDate();


    
    let dateFormat = day+"/"+mois+"/"+year

    return dateFormat;
  }

}
