import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica'
})
export class MultiplicaPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    
    let x: number = value * (args ? args : 1);

    return x;
  }

}
