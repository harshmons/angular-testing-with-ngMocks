import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';
 
export const getProductList = createAction(
    '[Products] Retrieve Product List'
);

export const getProductListSuccess = createAction(
    '[Products] Retrieve Product List Success',
    props<{ products: Array<Product> }>()
);

export const getProductListError = createAction(
    '[Products] Retrieve Product List Error',
    props<{ error: Error }>()
);

export const getProduct = createAction(
    '[Products] Retrieve Single Product',
    props<{id:number}>()
);

export const getProductSuccess = createAction(
    '[Products] Retrieve Single Product Success',
    props<{ product: Product }>()
);

export const getProductError = createAction(
    '[Products] Retrieve Single Product Error',
    props<{ error: Error }>()
);
    
// export const addProduct = createAction(
//     '[Products] Add New Product',
//     props<{ : string }>()
// );
