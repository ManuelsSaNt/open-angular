import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from '../models/player.interface';

@Pipe({
  name: 'calcPuntuacion'
})
export class CalcPuntuacionPipe implements PipeTransform {

  transform(value: IPlayer, ...args: unknown[]): unknown {
    let totalPoints = 0;
    
    value.points.forEach(point => {
      totalPoints += point;
    });
    
    return `${value.name} tiene ${totalPoints} puntos en total`;
  }

}
