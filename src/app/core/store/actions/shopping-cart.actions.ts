import { createAction, props } from '@ngrx/store';
import { Cart } from '../../models';
 
export const addToCart = createAction(
    '[Shopping-Cart] Add item to Cart',
    props<{item:Cart}>()
);

    

