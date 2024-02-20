import { ProductsComponent } from './products.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from '../../../app.module';
import { ProductService } from '../../../core/services/product/product.service';
import {mockProducts,mockProduct} from "../../../mocks"
import { of, EMPTY } from 'rxjs';
import { cold } from 'jest-marbles';

describe('ProductsComponent', () => {
  beforeEach(() =>
    MockBuilder(ProductsComponent, AppModule)
      .mock(ProductService, {
        getAllProducts: () => of(mockProducts),
      })
      // .mock(ShoppingCartService, {
      //   addToCart: () => EMPTY,
      // })
  );

  it('should render the component', () => {
    const fixture = MockRender(ProductsComponent);
    expect(fixture).toBeDefined();
  });

  // it('should have the products from service onInit', () => {
  //   const fixture = MockRender(ProductsComponent);
  //   const component = fixture.componentInstance;
  //   const expected$ = cold('(a|)', { a: mockProducts });
  //   expect(component.products$).toBeObservable(expected$);
  // });

  // it('should trigger service method on handleAddToCart', () => {
  //   const fixture = MockRender(ProductsComponent);
  //   const component = fixture.componentInstance;
  //   const shopService = ngMocks.findInstance(ShoppingCartService);
  //   const spy = jest.spyOn(shopService, 'addToCart');
  //   component.handleAddToCart(mockProduct);
  //   expect(spy).toHaveBeenCalled();
  // });

});