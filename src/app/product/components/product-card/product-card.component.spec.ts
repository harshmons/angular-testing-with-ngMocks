import { RouterLink} from '@angular/router';
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed"
import {MatButtonHarness} from "@angular/material/button/testing";
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { mockProduct } from '../../../mocks';
import { RoundOffPricePipe } from '../../../shared/pipes/round-off-price.pipe';
import { ProductFeatureModule } from '../../feature/product-feature.module';
import { ProductCardComponent } from './product-card.component';
import { TestBed } from '@angular/core/testing';

describe('Component : ProductCard', () => {

  let loader: HarnessLoader;

  beforeEach(() => {
    return MockBuilder(ProductCardComponent,ProductFeatureModule).mock(RoundOffPricePipe,(val)=>val).keep(RouterLink)
  })


  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{product:mockProduct});

    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });

  it("should map the product properties in the DOM if input is given",()=>{
    // ARRANGE
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

  it('should map the correct route', () => {
    // NOTE - This test can be avoided because the way we have asserted is not the correct way.
    // Correct way would be -
    // 1. Create a host component which will have all the router related stuff like router-outlet,etc
    // 2. Use router testing module to mock the stuff
    // 3. Assert on may correct route change based on the triggering a click event on anchor tag

    // So in order to test small stuff we have to do all those setups, which can be avoided as trade off and anyways ideally these can be taken care by automation suite also
    // Secondly, We mostly use the methods to change the route using router serivice from class methods

    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct
    });
    fixture.detectChanges();

    // ACT
    const moreDetailsEl = ngMocks.find('[data-testid="product-more-details"]');

    // ASSERT
    expect(moreDetailsEl.properties['outerHTML']).toMatch('products,'+mockProduct.id.toString());
  });

  it('should emit product data on triggering click event on button', () => {
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct
    });
    fixture.detectChanges()
    const addToCartEl = ngMocks.find('[data-testid="product-add-to-cart"]');
    let emittedData;
    fixture.point.componentInstance.addToCart.subscribe((data)=>{
      emittedData=data;
    });

    // ACT
    ngMocks.trigger(addToCartEl,'click')
    fixture.detectChanges();

    // ASSERT
    expect(emittedData).toEqual(mockProduct);
  });

  // Above test case can also be written in below ways too i.e.
  // avoid integration testing and test everything in isolated.
  // Which means instead of writing above 1 test case we can also break down into below 2 test cases.
  // Suggested is above one as it makes more sense from end user prespective
  it('should call the addToCart product method on triggering click event on button', () => {
    // This test case only checks the binding of HTML with Class method

    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct,
    });
    fixture.point.componentInstance.handleAddToCart = jest.fn()
    fixture.detectChanges()

    // ACT
    const addToCartEl = ngMocks.find('[data-testid="product-add-to-cart"]');
    ngMocks.trigger(addToCartEl,'click')
    fixture.detectChanges()

    // ASSERT
    expect(fixture.point.componentInstance.handleAddToCart).toHaveBeenCalledTimes(1);
    expect(fixture.point.componentInstance.handleAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('should emit the passed product on calling handleAddToCart method', () => {
    // This test case only checks that on calling handleAddToCart method, it calls the output method
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct,
      addToCart:jest.fn()
    });
    fixture.detectChanges()

    // ACT
    fixture.point.componentInstance.handleAddToCart(mockProduct);

    // ASSERT
    expect(fixture.componentInstance.addToCart).toHaveBeenCalledTimes(1);
    expect(fixture.componentInstance.addToCart).toHaveBeenCalledWith(mockProduct);
    // Read about point here - https://ng-mocks.sudo.eu/api/MockRender#proxy-between-params-and-fixture
  });

  // Above test case can also be written using component harness, to avoid the accessing the internals of 3rd party component
  // Here, since button component is very simple so it doesn't give to many benefits, but in case of little complex components like
  // mat-select, this will make more sense and become more easier to write unit test case

  it('MatButtonHarness : should emit product data on triggering click event on button', async () => {
    // ARRANGE
    const fixture = MockRender(ProductCardComponent,{
      product:mockProduct
    });

    loader = await TestbedHarnessEnvironment.loader(fixture);
    const addToCartBtn = await loader.getHarness(MatButtonHarness.with({
      selector:'[data-testid="product-add-to-cart"]'
    }))

    let emittedData;
    fixture.point.componentInstance.addToCart.subscribe((data)=>{
      emittedData=data;
    });

    // ACT
    await addToCartBtn.click();

    // ASSERT
    expect(emittedData).toEqual(mockProduct);
  });
});
