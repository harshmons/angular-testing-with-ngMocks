import { Pipe, PipeTransform } from '@angular/core';

/**
 * This pipe roudoff the given price and adds a currency symbol at the last
 *
 * @example
 * <!-- For price as 1.4, return 1 $ -->
 * <div>{{ price | roundOffPrice }}</div>
 */
@Pipe({
  name: 'roundOffPrice'
})
export class RoundOffPricePipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toFixed()} $` ;
  }

}
