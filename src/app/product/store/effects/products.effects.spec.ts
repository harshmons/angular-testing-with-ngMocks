import { MockBuilder, MockRender, ngMocks } from "ng-mocks";
import {ProductsEffects} from "./products.effects";
import { ProductService } from '../../../core/services/product/product.service';
import { mockProduct, mockProducts } from "../../../mocks";
import { Observable, of } from "rxjs";
import {cold, hot} from "jest-marbles";
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from "@ngrx/store";
import { fakeAsync, flush, tick } from "@angular/core/testing";

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
        expect(effects.loadProducts$).toBeObservable(expected)
    })

    it("should do the side effect for error",()=>{
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
        expect(effects.loadProducts$).toBeObservable(expected)
    })

    it("should do the side effect for retrieving single product",()=>{
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
        
        expect(effects.loadProductById$).toBeObservable(expected);
        expect(effects.loadProductById$).toSatisfyOnFlush(() => {
            expect(productService.getProductById).toHaveBeenCalledWith(123);
        })
        
    })

    it("should do the side effect for error",()=>{
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
        expect(effects.loadProductById$).toBeObservable(expected)
    })
})