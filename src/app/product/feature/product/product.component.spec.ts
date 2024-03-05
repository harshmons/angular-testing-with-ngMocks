import { mockProduct } from '../../../mocks';
import {  Subject, of } from 'rxjs';
import { ProductComponent } from './product.component';
import { MockBuilder, MockRender, ngMocks} from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';
import { FeatureModule } from '../feature.module';
import { Store } from '@ngrx/store';
import * as action from '../../store/actions/products.actions';
import { ProductDetailComponent } from '../../components';
import { selectSelectedProduct } from '../../store/reducers/products.reducer';

jest.spyOn(action,'getProduct')

describe('Feature Component : Product', () => {
  
  let mockStore$ : Subject<any>;
  beforeEach(() => {
    mockStore$ = new Subject();
    jest.clearAllMocks();
  })

  beforeEach(() => {
    return MockBuilder(ProductComponent, FeatureModule).provide({
      provide:Store,
      useValue:{
        select: jest.fn().mockReturnValue(mockStore$),
        dispatch: jest.fn()
      }
    }).provide({
        provide: ActivatedRoute,
        useValue: {
          snapshot: { params: { id: '1' } }
        }
      }).keep(ProductDetailComponent)
  })
  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(ProductComponent);
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should dispatch the action',()=>{
    // ARRANGE
    const fixture = MockRender(ProductComponent);

    // ASSERT
    const storeService = fixture.point.injector.get(Store)
    expect(storeService.dispatch).toHaveBeenCalledTimes(1);
    expect(action.getProduct).toHaveBeenCalledTimes(1);
    expect(action.getProduct).toHaveBeenCalledWith({id:'1'});
  })

  it('should set the input of ProductDetailComponent with store value',()=>{
    // ARRANGE
    const fixture = MockRender(ProductComponent);
    const productDetailComponentEl = ngMocks.findInstance(fixture,ProductDetailComponent);
    
    // ACT
    mockStore$.next(mockProduct)
    fixture.detectChanges()

    // ASSERT
    const storeService = fixture.point.injector.get(Store)
    expect(storeService.select).toHaveBeenCalledTimes(1);
    expect(storeService.select).toHaveBeenCalledWith(selectSelectedProduct);
    expect(productDetailComponentEl.detail).toEqual(mockProduct)
  })

})