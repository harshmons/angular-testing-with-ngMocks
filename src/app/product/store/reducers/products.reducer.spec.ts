import {mockProducts} from "../../../mocks"
import { getProductListSuccess, getProductSuccess } from '../actions/products.actions';
import * as fromReducer from './products.reducer';
describe('Reducer : Product', () => {
    it('should update the state with InitialState in case of action is not matched',()=>{
        // ARRANGE
        const { initialState } = fromReducer;
        const action = {
          type: 'Unknown',
        };

        // ACT
        const state = fromReducer.productsReducer(initialState, action);
        
        // ASSERT
        expect(state).toBe(initialState);
    })

    it('should update the state with product list when action is getProductListSuccess',()=>{
        // ARRANGE
        const { initialState } = fromReducer;
        const newState = {
            ...initialState,
            products:mockProducts
        };
        const action = getProductListSuccess({ products: mockProducts });
        
        // ACT
        const state = fromReducer.productsReducer(initialState, action);
        
        // ASSERT
        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
    })

    it('should update the state with selected Product when action is getProductSuccess',()=>{
        // ARRANGE
        const { initialState } = fromReducer;
        const newState = {
            ...initialState,
            selectedProduct:mockProducts[1]
        };
        const action = getProductSuccess({ product: mockProducts[1] });
        
        // ACT
        const state = fromReducer.productsReducer(initialState, action);
        
        // ASSERT
        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
    })
});

describe("Selectors : Product", () => {
    const state: any = {
        products:{
            products:mockProducts,
            selectedProduct:mockProducts[0],
        }
    }
  
    it("should select the products from the store", () => {
        // ACT
        const result = fromReducer.selectProductList(state);
        
        // ASSERT
        expect(result).toHaveLength(mockProducts.length);
        expect(result).toEqual(mockProducts);
    });
  
    it("should select the single selected product from the store", () => {
        // ACT
        const result = fromReducer.selectSelectedProduct(state);
        
        // ASSERT
        expect(result).toEqual(mockProducts[0]);
    });
});