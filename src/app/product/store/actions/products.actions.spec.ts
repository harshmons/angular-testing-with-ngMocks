import {mockProducts,mockProduct} from "../../../mocks"
import * as actions from "./products.actions";
describe("Actions : Product ",()=>{
    it('should create getProductList action',()=>{
        // ACT
        const action = actions.getProductList()
        
        // ASSERT
        expect(action).toEqual({type:'[Products] Retrieve Product List'})
    })

    it('should create getProductListSuccess action',()=>{
        // ACT
        const action = actions.getProductListSuccess({products:mockProducts})
        
        // ASSERT
        expect(action).toEqual({type:'[Products] Retrieve Product List Success',products:mockProducts})
    })

    it('should create getProductListError action',()=>{
        // ARRANGE
        const dummyError = new Error('Dummy Error')
        
        // ACT
        const action = actions.getProductListError({error:dummyError})
        
        // ASSERT
        expect(action).toEqual({type:'[Products] Retrieve Product List Error',error:dummyError})
    })


    it('should create getProduct action',()=>{
        // ACT
        const action = actions.getProduct({id:1})
        
        // ASSERT
        expect(action).toEqual({type:'[Products] Retrieve Single Product',id:1})
    })

    it('should create getProductSuccess action',()=>{
        // ACT
        const action = actions.getProductSuccess({product:mockProduct})
        
        // ASSERT
        expect(action).toEqual({type:'[Products] Retrieve Single Product Success',product:mockProduct})
    })

    it('should create getProductError action',()=>{
        // ARRANGE
        const dummyError = new Error('Dummy Error')
        
        // ACT
        const action = actions.getProductError({error:dummyError})
        
        // ASSERT
        expect(action).toEqual({type:'[Products] Retrieve Single Product Error',error:dummyError})
    })

})