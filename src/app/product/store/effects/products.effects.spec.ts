import { Action } from "@ngrx/store";
import { provideMockActions } from '@ngrx/effects/testing';
import { MockBuilder, ngMocks } from "ng-mocks";
import { Observable } from "rxjs";
import {cold, hot} from "jest-marbles";
import { ProductService } from '../../../core/services/product/product.service';
import { mockProduct, mockProducts } from "../../../mocks";
import {ProductsEffects} from "./products.effects";

describe("Effect : Product",()=>{
    let actions$ = new Observable<Action>();

    beforeEach(() => {
        return MockBuilder(ProductsEffects).mock(ProductService,{
            getAllProducts:jest.fn().mockReturnValue(cold('-a|',{
                a:mockProducts
            })),
            getProductById:jest.fn().mockReturnValue(cold('-a|',{
                a:mockProduct
            }))
        }).provide(provideMockActions(() => actions$))
      })
    it("should do the side effect for retrieving product list",()=>{
        // ARRANGE
        const effects = ngMocks.findInstance(ProductsEffects);
        const expected = hot('--a',{
            a:{
                type:'[Products] Retrieve Product List Success',
                products:mockProducts
            }
        })
        actions$ = hot('-a', {
            a: { type: '[Products] Retrieve Product List' }
        })

        // ASSERT
        expect(effects.loadProducts$).toBeObservable(expected)
    })

    it("should do the side effect for error",()=>{
        // ARRANGE
        const productService = ngMocks.findInstance(ProductService);
        const error = new Error("Sample Error");
        productService.getAllProducts = jest.fn().mockReturnValue(cold('-#',undefined,error))
        const effects = ngMocks.findInstance(ProductsEffects);
        const expected = hot('--a',{
            a:{
                type:'[Products] Retrieve Product List Error',
                error: error
            }
        })
        actions$ = hot('-a', {
            a: { type: '[Products] Retrieve Product List' } 
        })
        
        // ASSERT
        expect(effects.loadProducts$).toBeObservable(expected)
    })

    it("should do the side effect for retrieving single product",()=>{
        // ARRANGE
        const effects = ngMocks.findInstance(ProductsEffects);
        const productService = ngMocks.findInstance(ProductService);
        const expected = cold('--a',{
            a:{
                type:'[Products] Retrieve Single Product Success',
                product:mockProduct
            }
        })
        actions$ = hot('-a', {
            a: { type: '[Products] Retrieve Single Product',id:123 }
        })
        
        // ASSERT
        expect(effects.loadProductById$).toBeObservable(expected);
        expect(effects.loadProductById$).toSatisfyOnFlush(() => {
            expect(productService.getProductById).toHaveBeenCalledWith(123);
        })
    })

    it("should do the side effect for error",()=>{
        // ARRANGE
        const productService = ngMocks.findInstance(ProductService);
        const error = new Error("Sample Error");
        productService.getProductById = jest.fn().mockReturnValue(cold('-#',undefined,error))
        const effects = ngMocks.findInstance(ProductsEffects);
        const expected = hot('--a',{
            a:{
                type:'[Products] Retrieve Single Product Error',
                error: error
            }
        })
        actions$ = hot('-a', {
            a: { type: '[Products] Retrieve Single Product',id:123 } 
        })
        
        // ASSERT
        expect(effects.loadProductById$).toBeObservable(expected)
    })
})