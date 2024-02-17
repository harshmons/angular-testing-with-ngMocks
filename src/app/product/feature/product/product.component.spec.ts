import { mockProduct } from '../../../mocks';
import {  of } from 'rxjs';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductComponent } from './product.component';
import { MockBuilder, MockRender} from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from '../../../app.module';

describe('Home Component', () => {
  beforeEach(() => {
    return MockBuilder(ProductComponent, AppModule)
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
    const fixture = MockRender(ProductComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
})