import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { mockCart } from '../../../mocks';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartFeatureModule } from '../../feature/cart-feature.module';

describe('Component: ShoppingCart', () => {
  
  beforeEach(() => {
    return MockBuilder(ShoppingCartComponent,CartFeatureModule)
  })
  
  it('should be defined', () => {
    //ARRANGE
    const fixture = MockRender(ShoppingCartComponent, {
      item: mockCart
    });

    // ASSERT
    expect(fixture.point.componentInstance.item).toBe(mockCart);
  })

  it("should map the cart item properties in the DOM if input is given",()=>{
    // ARRANGE
    const fixture = MockRender(ShoppingCartComponent,{
      item:mockCart
    });
    fixture.detectChanges()
    
    // ASSERT
    const imageEl = ngMocks.find('[data-testid="product-image"][src="' + mockCart.image + '"]');
    expect(imageEl).toBeDefined();
    
    const titleEl = ngMocks.find('[data-testid="product-title"]');
    expect(ngMocks.formatText(titleEl)).toMatch(mockCart.title);
    
    const productCategoryPriceEl = ngMocks.find('[data-testid="product-category-price"]');
    expect(ngMocks.formatText(productCategoryPriceEl)).toMatch(mockCart.category);
    expect(ngMocks.formatText(productCategoryPriceEl)).toMatch(mockCart.price.toString());

    const productQuantityEl = ngMocks.find('[data-testid="product-quantity"]');
    expect(ngMocks.formatText(productQuantityEl)).toMatch(mockCart.quantity.toString());
  })
})