import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundOffPrice'
})
export class RoundOffPricePipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toFixed()} $` ;
  }

}
