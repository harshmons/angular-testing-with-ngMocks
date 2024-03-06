import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError,switchMap} from 'rxjs/operators';
import {getProduct, getProductError, getProductList,getProductListError,getProductListSuccess, getProductSuccess} from "../actions/products.actions"; 
import { ProductService } from '../../../core/services/product/product.service';

@Injectable()
export class ProductsEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductList),
    switchMap(() => this.productService.getAllProducts()
      .pipe(
        map(list => (getProductListSuccess({products:list}))),
        catchError((error) => of(getProductListError({error})))
      ))
    )
  );

  loadProductById$ = createEffect(() => this.actions$.pipe(
    ofType(getProduct),
    switchMap(({id}) => this.productService.getProductById(id)
      .pipe(
        map(product => (getProductSuccess({product}))),
        catchError((error) => of(getProductError({error})))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}