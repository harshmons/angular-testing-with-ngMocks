import * as actions from "./products.actions";
import {mockProducts,mockProduct} from "../../../mocks"
describe("Actions : Product ",()=>{
    it('should create getProductList action',()=>{
        const action = actions.getProductList()
        expect(action).toEqual({type:'[Products] Retrieve Product List'})
    })

    it('should create getProductListSuccess action',()=>{
        const action = actions.getProductListSuccess({products:mockProducts})
        expect(action).toEqual({type:'[Products] Retrieve Product List Success',products:mockProducts})
    })

    it('should create getProductListError action',()=>{
        const dummyError = new Error('Dummy Error')
        const action = actions.getProductListError({error:dummyError})
        expect(action).toEqual({type:'[Products] Retrieve Product List Error',error:dummyError})
    })


    it('should create getProduct action',()=>{
        const action = actions.getProduct({id:1})
        expect(action).toEqual({type:'[Products] Retrieve Single Product',id:1})
    })

    it('should create getProductSuccess action',()=>{
        const action = actions.getProductSuccess({product:mockProduct})
        expect(action).toEqual({type:'[Products] Retrieve Single Product Success',product:mockProduct})
    })

    it('should create getProductError action',()=>{
        const dummyError = new Error('Dummy Error')
        const action = actions.getProductError({error:dummyError})
        expect(action).toEqual({type:'[Products] Retrieve Single Product Error',error:dummyError})
    })

})