import * as fromReducer from './products.reducer';
import { getProductListSuccess, getProductSuccess } from '../actions/products.actions';
import {mockProducts} from "../../../mocks"
describe('Reducer : Shopping Cart', () => {
  
    it('should update the state with InitialState in case of action is not matched',()=>{
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };
        const state = fromReducer.productsReducer(initialState, action);
        expect(state).toBe(initialState);
    })

    it('should update the state with product list when action is getProductListSuccess',()=>{
        const { initialState } = fromReducer;
        const newState = {
            ...initialState,
            products:mockProducts
        };
        const action = getProductListSuccess({ products: mockProducts });
        const state = fromReducer.productsReducer(initialState, action);
        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
    })

    it('should update the state with selected Product when action is getProductSuccess',()=>{
        const { initialState } = fromReducer;
        const newState = {
            ...initialState,
            selectedProduct:mockProducts[1]
        };
        const action = getProductSuccess({ product: mockProducts[1] });
        const state = fromReducer.productsReducer(initialState, action);
        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
    })
});

describe("Selectors", () => {
    const state: any = {
        products:{
            products:mockProducts,
            selectedProduct:mockProducts[0],
        }
    }
  
    it("should select the products from the store", () => {
      const result = fromReducer.selectProductList(state);
      expect(result).toHaveLength(mockProducts.length);
      expect(result).toEqual(mockProducts);
    });
  
    it("should select the single selected product from the store", () => {
        const result = fromReducer.selectSelectedProduct(state);
        expect(result).toEqual(mockProducts[0]);
      });
  });