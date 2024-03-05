import * as fromReducer from './shopping-cart.reducer';
import { addToCart } from '../actions/shopping-cart.actions';
import {mockShoppingCart,mockProducts} from "../../../mocks"
describe('Reducer : Shopping Cart', () => {
  
    it('should update the state with InitialState in case of action is not matched',()=>{
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.shoppingCartReducer(initialState, action);
        expect(state).toBe(initialState);
    })

    it('should update the state with the cart item when action is addToCart',()=>{
        const { initialState } = fromReducer;
        const newState = {
            ...initialState,
            items:[...initialState.items,mockProducts[0]]
        };
        const action = addToCart({ item: mockProducts[0] });
        const state = fromReducer.shoppingCartReducer(initialState, action);
        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
    })
});

describe("Selectors", () => {
    const state: any = {
        cart:{
            items:mockShoppingCart
        }
    }
  
    it("should select the cart items from the store", () => {
      const result = fromReducer.selectCartItems(state);
      expect(result).toHaveLength(mockShoppingCart.length);
      expect(result).toEqual(mockShoppingCart);
    });
  
    it("should select the cart count from the store", () => {
        const result = fromReducer.selectCartCount(state);
        expect(result).toBe(mockShoppingCart.length);
      });
  });