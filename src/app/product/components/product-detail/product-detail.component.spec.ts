import { ProductDetailComponent } from './product-detail.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { FeatureModule } from '../../feature/feature.module';
import { mockProduct } from '../../../mocks';

describe('Component : Home Component', () => {
  beforeEach(() => {
    return MockBuilder(ProductDetailComponent, FeatureModule)
  })
  it('should be defined', () => {
    // ACT
    const fixture = MockRender(ProductDetailComponent);
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });

  it("should map the product properties in the DOM if input is given",()=>{
    // ACT
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
    // ACT
    const fixture = MockRender(ProductDetailComponent);
    fixture.detectChanges()
    
    // ASSERT
    const emptyEl = ngMocks.formatText(fixture);
    expect(emptyEl).toBe('');
  })
})