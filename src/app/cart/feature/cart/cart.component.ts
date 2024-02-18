import { Cart } from '../../../core/models';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { ShoppingCartState, selectCartItems } from 'src/app/core/store/reducers/shopping-cart.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Array<Cart>>;
  constructor(
    private store:Store<{cart:ShoppingCartState}>
    ) { }

  ngOnInit() {
    this.cartItems$ = this.store.select(selectCartItems)
  }

}
