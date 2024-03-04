import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ProductCardComponent } from './product-card.component';
import { mockProduct } from '../../../mocks';
import { AppModule } from '../../../app.module';
import { Product } from '../../../core/models';
import { FeatureModule } from '../../feature/feature.module';
import { RoundOffPricePipe } from '../../../shared/pipes/round-off-price.pipe';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Component : ProductCardComponent', () => {
  // let fixture: MockedComponentFixture<ProductCardComponent, {
  //   product: Product,
  //   onAddToCart: () => {}
  // }>;
  // ngMocks.faster();

  beforeEach(() => {
    return MockBuilder(ProductCardComponent, FeatureModule).
    mock(RoundOffPricePipe,(val)=>val)
    // .replace(RouterModule,RouterTestingModule)
  })

  // beforeAll(() => MockBuilder(ProductCardComponent, AppModule));
  // beforeAll(() => {
  //   fixture = MockRender(ProductCardComponent, {
  //     product: mockProduct,
  //     onAddToCart: jest.fn(),
  //   })
  // });

  it('should be defined', () => {
    // ACT
    const fixture = MockRender(ProductCardComponent,{product:mockProduct});
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });

  it("should map the product properties in the DOM if input is given",()=>{
    // ACT
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct
    });
    fixture.detectChanges()
    
    // ASSERT
    const imageEl = ngMocks.find('[data-testid="product-image"][src="' + mockProduct.image + '"]');
    expect(imageEl).toBeDefined();
    
    const titleEl = ngMocks.find('[data-testid="product-title"]');
    expect(ngMocks.formatText(titleEl)).toMatch(mockProduct.title);
    
    const categoryEl = ngMocks.find('[data-testid="product-category"]');
    expect(ngMocks.formatText(categoryEl)).toMatch(mockProduct.category);

    const priceEl = ngMocks.find('[data-testid="product-price"]');
    expect(ngMocks.formatText(priceEl)).toMatch(mockProduct.price.toString());
  })

  // it('should map the correct route', () => {
  //   // ARRANGE
  //   const fixture = MockRender(ProductCardComponent,{
  //     product:mockProduct
  //   });
  //   fixture.detectChanges()
  //   const location: Location = fixture.point.injector.get(Location);

  //   // ACT
  //   const moreDetailsEl = ngMocks.find('[data-testid="product-more-details"]');
    
  //   ngMocks.trigger(moreDetailsEl,'click')
  //   fixture.detectChanges();
    
  //   // ASSERT
  //   console.log("LOCATION ---->",location);
  //   // expect(location.()).toEqual(mockProduct);
  // });

  it('should emit product data on triggering click event on button ', () => {
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct
    });
    fixture.detectChanges()
    
    // ACT
    const addToCartEl = ngMocks.find('[data-testid="product-add-to-cart"]');
    let emittedData;
    fixture.point.componentInstance.onAddToCart.subscribe((data)=>{
      emittedData=data;
    });
    ngMocks.trigger(addToCartEl,'click')
    fixture.detectChanges();
    
    // ASSERT
    expect(emittedData).toEqual(mockProduct);
  });

  // Above test case can also be written in below ways to 
  // avoid integration testing and test everything in isolated.
  // Which means instead of writing above 1 test case we can also break down into below 2 test cases
  // Suggested is above one as it makes more sense from end user prespective
  it('should call the addToCart product method on triggering click event on button ', () => {
    // This test case only checks the binding of HTML with Class method
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct,
    });
    fixture.point.componentInstance.addToCart = jest.fn()
    fixture.detectChanges()
    
    // ACT
    const addToCartEl = ngMocks.find('[data-testid="product-add-to-cart"]');
    ngMocks.trigger(addToCartEl,'click')
    fixture.detectChanges()

    // ASSERT
    expect(fixture.point.componentInstance.addToCart).toHaveBeenCalledTimes(1);
    expect(fixture.point.componentInstance.addToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('should emit the passed product on calling addToCart method', () => {
    // This test case only checks that on calling addToCart method, it calls the output method
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct,
      onAddToCart:jest.fn()
    });
    fixture.detectChanges()
    
    // ACT
    fixture.point.componentInstance.addToCart(mockProduct);

    // ASSERT
    expect(fixture.componentInstance.onAddToCart).toHaveBeenCalledTimes(1);
    expect(fixture.componentInstance.onAddToCart).toHaveBeenCalledWith(mockProduct);
    // Read about point here - https://ng-mocks.sudo.eu/api/MockRender#proxy-between-params-and-fixture
  });

});
