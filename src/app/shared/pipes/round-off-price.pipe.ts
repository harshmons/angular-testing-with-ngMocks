import { Pipe, PipeTransform } from '@angular/core';

/**
 * RoudOffPrice Pipe
 * @export
 * @class RoundOffPricePipe
 * @implements PipeTransform
 */
@Pipe({
  name: 'roundOffPrice'
})
export class RoundOffPricePipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toFixed()} $` ;
  }

}
