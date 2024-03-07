import {mockShoppingCart,mockProducts} from "../../../mocks"
import { addToCart } from '../actions/shopping-cart.actions';
import * as fromReducer from './shopping-cart.reducer';
describe('Reducer : ShoppingCart', () => {
  
    it('should update the state with InitialState in case of action is not matched',()=>{
        // ARRANGE
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };

        // ACT
        const state = fromReducer.shoppingCartReducer(initialState, action);
        
        // ASSERT
        expect(state).toBe(initialState);
    })

    it('should update the state with the cart item when action is addToCart',()=>{
        // ARRANGE
        const { initialState } = fromReducer;
        const newState = {
            ...initialState,
            items:[...initialState.items,mockProducts[0]]
        };
        const action = addToCart({ item: mockProducts[0] });
        
        // ACT
        const state = fromReducer.shoppingCartReducer(initialState, action);
        
        // ASSERT
        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
    })
});

describe("Selectors : ShoppingCart", () => {
    const state: any = {
        cart:{
            items:mockShoppingCart
        }
    }
  
    it("should select the cart items from the store", () => {
        // ACT
        const result = fromReducer.selectCartItems(state);
      
        // ASSERT
        expect(result).toHaveLength(mockShoppingCart.length);
        expect(result).toEqual(mockShoppingCart);
    });
  
    it("should select the cart count from the store", () => {
        // ACT
        const result = fromReducer.selectCartCount(state);
        
        // ASSERT
        expect(result).toBe(mockShoppingCart.length);
    });
});