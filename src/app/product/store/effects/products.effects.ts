import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {getProduct, getProductList,getProductListSuccess, getProductSuccess} from "../actions/products.actions"; 
import { ProductService } from '../../../core/services/product/product.service';

@Injectable()
export class ProductsEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductList),
    mergeMap(() => this.productService.getAllProducts()
      .pipe(
        map(list => (getProductListSuccess({products:list}))),
        catchError(() => EMPTY)
      ))
    )
  );

  loadProductById$ = createEffect(() => this.actions$.pipe(
    ofType(getProduct),
    mergeMap(({id}) => this.productService.getProductById(id)
      .pipe(
        map(product => (getProductSuccess({product}))),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}