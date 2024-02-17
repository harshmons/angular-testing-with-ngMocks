import { ShoppingCartService } from '../../../core/services/shopping-cart/shopping-cart.service';
import { Cart } from '../../../core/interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.shoppingCartService.getAllCartItems();
  }

}
