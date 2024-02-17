import { cold } from 'jest-marbles';
import { mockProduct } from '../../../mocks';
import { of } from 'rxjs';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductDetailComponent } from './product-detail.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppModule } from '../../../app.module';

describe('Home Component', () => {
  beforeEach(() => {
    return MockBuilder(ProductDetailComponent, AppModule)
      .mock(ProductService, {
        getProductById: () => of(mockProduct)
      })
      .provide({
        provide: ActivatedRoute,
        useValue: {
          snapshot: { params: { id: '1' } }
        }
      })
  })
  it('should be defined', () => {
    const fixture = MockRender(ProductDetailComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  // it('should render the item in DOM', () => {
  //   const fixture = MockRender(ProductDetailComponent);
  //   const imageEl = ngMocks.find('img');
  //   fixture.detectChanges();
  //   expect(imageEl).toBeDefined();
  // })
})