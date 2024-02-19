import { Product } from '../../../core/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { getProduct } from '../../store/actions/products.actions';
import { selectSelectedProduct } from '../../store/reducers/products.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails$: Observable<Product>;

  constructor(private route: ActivatedRoute,
    private store:Store
    ) { }

  ngOnInit() {
    const routeId:number = this.route.snapshot.params['id'];
    this.store.dispatch(getProduct({id:routeId}));
    this.productDetails$ = this.store.select(selectSelectedProduct)
  }

}
