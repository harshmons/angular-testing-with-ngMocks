import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable } from 'rxjs';
import { Cart } from '../../../core/models';
import { ShoppingCartState, selectCartItems } from '../../store/reducers/shopping-cart.reducer';

@Component({
  selector: 'app-cart-feature',
  templateUrl: './cart-feature.component.html',
  styleUrls: ['./cart-feature.component.css']
})
export class CartFeatureComponent implements OnInit {
  cartItems$: Observable<Array<Cart>>;
  constructor(
    private store:Store<{cart:ShoppingCartState}>
    ) { }

  ngOnInit() {
    this.cartItems$ = this.store.select(selectCartItems)
  }

}
