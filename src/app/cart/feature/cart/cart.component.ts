import { Cart } from '../../../core/models';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable } from 'rxjs';
import { ShoppingCartState, selectCartItems } from '../../store/reducers/shopping-cart.reducer';

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
