import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { Product } from '../../../core/models';
import { getProduct } from '../../store/actions/products.actions';
import { selectSelectedProduct } from '../../store/reducers/products.reducer';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.css']
})
export class ProductFeatureComponent implements OnInit {
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
