import { Cart,Product } from '../../../core/models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductList } from '../../store/actions/products.actions';
import { selectProductList } from '../../store/reducers/products.reducer';
import { addToCart } from '../../../cart/store';

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
