import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { mockProduct } from '../../../mocks';
import { ProductFeatureModule } from '../../feature/product-feature.module';
import { ProductDetailComponent } from './product-detail.component';

describe('Component : ProductDetail', () => {
  beforeEach(() => {
    return MockBuilder(ProductDetailComponent, ProductFeatureModule)
  })
  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(ProductDetailComponent);
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });

  it("should map the product properties in the DOM if input is given",()=>{
    // ARRANGE
    const fixture = MockRender(ProductDetailComponent,{
      detail:mockProduct
    });
    fixture.detectChanges()
    
    // ASSERT
    const imageEl = ngMocks.find('[data-testid="product-image"][src="' + mockProduct.image + '"]');
    expect(imageEl).toBeDefined();
    
    const titleEl = ngMocks.find('[data-testid="product-title"]');
    expect(ngMocks.formatText(titleEl)).toMatch(mockProduct.title);
    
    const categoryEl = ngMocks.find('[data-testid="product-category"]');
    expect(ngMocks.formatText(categoryEl)).toMatch(mockProduct.category);

    const descriptionEl = ngMocks.find('[data-testid="product-description"]');
    expect(ngMocks.formatText(descriptionEl)).toMatch(mockProduct.description);
  })

  it("should map the product properties in the DOM if input is not given",()=>{
    // ARRANGE
    const fixture = MockRender(ProductDetailComponent);
    fixture.detectChanges()
    
    // ASSERT
    const emptyEl = ngMocks.formatText(fixture);
    expect(emptyEl).toBe('');
  })
})