import { Cart,Product } from '../../../core/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {getProductList} from "../../../core/store/actions/products.actions"
import { selectProductList } from 'src/app/core/store/reducers/products.reducer';
import { addToCart } from 'src/app/core/store/actions/shopping-cart.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(
    private store:Store<{products:Product[]}>
    ) { }

  ngOnInit() {
    
    this.store.dispatch(getProductList())
    this.products$ = this.store.select(selectProductList)
  }

  handleAddToCart(product: Product) {
    const cartItem: Cart = {
      category: product.category,
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price
    }
    this.store.dispatch(addToCart({item:cartItem}))
  }

}
