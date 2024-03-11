import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart,Product } from '../../../core/models';
import { addToCart } from '../../../cart/store';
import { getProductList } from '../../store/actions/products.actions';
import { selectProductList } from '../../store/reducers/products.reducer';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-products-feature',
  templateUrl: './products-feature.component.html',
  styleUrls: ['./products-feature.component.css']
})
export class ProductsFeatureComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(
    private store:Store<{products:Product[]}>
    ) { }

  ngOnInit() {
    
    this.store.dispatch(getProductList())
    this.products$ = this.store.select(selectProductList)
  }

  onAddToCart(product: Product) {
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
