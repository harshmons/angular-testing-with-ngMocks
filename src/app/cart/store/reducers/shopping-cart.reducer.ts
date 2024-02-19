import { createReducer, createSelector, on } from '@ngrx/store';

import { addToCart } from '../actions/shopping-cart.actions';
import { Cart } from '../../../core/models';

export interface ShoppingCartState{
    items:Array<Cart>
}

export const initialState:ShoppingCartState = {
    items:[]
};

export const shoppingCartReducer = createReducer(
  initialState,
  on(addToCart, (state,{item}) => {
    const newItemList = [...state.items,item];
    return {
        ...state,
        items:newItemList
    };
})
);

// SELECTORS 
export const selectShoppingCartFeature = (state:any)=> state.cart as ShoppingCartState;

export const selectCartItems =  createSelector(selectShoppingCartFeature,(state)=>state.items)

export const selectCartCount =  createSelector(selectShoppingCartFeature,(state)=>state.items.length)