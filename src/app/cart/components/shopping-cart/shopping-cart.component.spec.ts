import { ShoppingCartComponent } from './shopping-cart.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { mockCart } from '../../../mocks';

describe('Component: ShoppingCart', () => {
  beforeEach(() => {
    return MockBuilder(ShoppingCartComponent)
  })
  it('should be defined', () => {
    //ACT
    const fixture = MockRender(ShoppingCartComponent, {
      item: mockCart
    });

    // ASSERT
    expect(fixture.point.componentInstance.item).toBe(mockCart);
  })
})