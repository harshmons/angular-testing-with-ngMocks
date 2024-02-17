import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ProductCardComponent } from './product-card.component';
import { mockProduct } from '../../../mocks';
import { AppModule } from '../../../app.module';
import { Product } from '../../../core/interfaces';

describe('ProductCardComponent', () => {
  let fixture: MockedComponentFixture<ProductCardComponent, {
    product: Product,
    onAddToCart: () => {}
  }>;
  ngMocks.faster();

  beforeAll(() => MockBuilder(ProductCardComponent, AppModule));
  beforeAll(() => {
    fixture = MockRender(ProductCardComponent, {
      product: mockProduct,
      onAddToCart: jest.fn(),
    })
  });

  it('should be defined', () => {
    expect(fixture.point.componentInstance).toBeDefined();
  });

  it('should test the Input property', () => {
    const component = fixture.componentInstance;
    expect(component.product).toBe(mockProduct);
  });

  it('should test the Output property', () => {
    const component = fixture.componentInstance;
    const buttonEl = ngMocks.find('button');
    ngMocks.click(buttonEl);
    expect(component.onAddToCart).toHaveBeenCalled();
  });

});
