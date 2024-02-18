import { createReducer, createSelector, on } from '@ngrx/store';

import { getProductListSuccess, getProductSuccess } from '../actions/products.actions';
import { Product } from '../../models';

export interface ProductsState{
    products:Array<Product>
    selectedProduct:Product,
}

export const initialState:ProductsState = {
    products:[],
    selectedProduct:null,
};

export const productsReducer = createReducer(
  initialState,
  on(getProductListSuccess, (state,{products}) => {
    return {
        ...state,
        products
    };
  }),
  on(getProductSuccess, (state,{product}) => {
    return {
        ...state,
        selectedProduct:product
    };
  })
);

// SELECTORS 
export const selectProductsFeature = (state:any)=> state.products as ProductsState;

export const selectProductList =  createSelector(selectProductsFeature,(state)=>state.products)

export const selectSelectedProduct = createSelector(selectProductsFeature,(state)=>state.selectedProduct)