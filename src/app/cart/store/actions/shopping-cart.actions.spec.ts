import {mockCart} from "../../../mocks"
import * as actions from "./shopping-cart.actions";
describe("Actions : ShoppingCart",()=>{
    it('should create addToCart action',()=>{
        // ACT
        const action = actions.addToCart({item:mockCart})
        
        // ASSERT
        expect(action).toEqual({type:'[Shopping-Cart] Add item to Cart',item:mockCart})
    })
})