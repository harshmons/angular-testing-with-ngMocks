import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();

  handleAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
