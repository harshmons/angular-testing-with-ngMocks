import * as actions from "./shopping-cart.actions";
import {mockCart} from "../../../mocks"
describe("Actions : Shopping cart",()=>{
    it('should create addToCart action',()=>{
        const action = actions.addToCart({item:mockCart})
        expect(action).toEqual({type:'[Shopping-Cart] Add item to Cart',item:mockCart})
    })
})