import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuscule'
})
export class TypeCongePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    if(value == 'RTT'){
      return value
    }

    value = value.replace(/_/g, ' ').toLowerCase()
    
    value = value.replace(value.charAt(0), value.charAt(0).toUpperCase())

    return value
  }


}
