import { Component, Input } from '@angular/core';
import { Cart } from '../../../core/models';

/**
 * This component displays a singe cart item based on the 
 * input property
 *  
 * Usage example: 
 * @example
 * <app-shopping-cart [item]="cartItem"></app-shopping-cart>
*/
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  /**
   * Used to pass the single cart object to this component
   */
  @Input() item: Cart;
}

// Dummy change
