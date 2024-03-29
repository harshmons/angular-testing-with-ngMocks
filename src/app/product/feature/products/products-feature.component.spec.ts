import { Store } from '@ngrx/store';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import {mockProducts} from "../../../mocks"
import * as cartActions from '../../../cart/store';
import * as actions from '../../store/actions/products.actions';
import { ProductCardComponent } from '../../components';
import { ProductFeatureModule } from '../product-feature.module';
import { ProductsFeatureComponent } from './products-feature.component';

jest.spyOn(actions,'getProductList')
jest.spyOn(cartActions,'addToCart')

describe('Component : ProductsFeature', () => {
  let mockStore$ : Subject<any>;
  beforeEach(() => {
    mockStore$ = new Subject();
    jest.clearAllMocks();
  })

  beforeEach(() =>
    MockBuilder(ProductsFeatureComponent, ProductFeatureModule).provide({
      provide:Store,
      useValue:{
        select: jest.fn().mockReturnValue(mockStore$),
        dispatch: jest.fn()
      }
    }).keep(ProductCardComponent)
  );

  it('should render the component', () => {
    // ARRANGE
    const fixture = MockRender(ProductsFeatureComponent);
    
    // ASSERT
    expect(fixture).toBeDefined();
  });

  it('should dispatch the action',()=>{
    // ARRANGE
    const fixture = MockRender(ProductsFeatureComponent);

    // ASSERT
    const storeService = fixture.point.injector.get(Store)
    expect(storeService.dispatch).toHaveBeenCalledTimes(1);
    expect(actions.getProductList).toHaveBeenCalledTimes(1);
    expect(actions.getProductList).toHaveBeenCalledWith();
  })

  it('should set the input of ProductCardComponent with store value and spinner should not be visible',async ()=>{
    // ARRANGE
    const fixture = MockRender(ProductsFeatureComponent);
    
    // ACT
    mockStore$.next(mockProducts)
    fixture.detectChanges()
    await fixture.whenStable();
    
    // ASSERT
    const productCardComponentEl = ngMocks.findInstances(fixture,ProductCardComponent);
    const matSpinnerEl = ngMocks.findInstance(fixture,MatSpinner,null);
    expect(productCardComponentEl).toHaveLength(mockProducts.length);
    expect(productCardComponentEl[0].product).toEqual(mockProducts[0]);
    expect(productCardComponentEl[1].product).toEqual(mockProducts[1])
    expect(matSpinnerEl).toBeNull()
  })

  it('should render the spinner and not the ProductCardComponent if there is no data in store for list of products',async ()=>{
    // ARRANGE
    const fixture = MockRender(ProductsFeatureComponent);
    
    // ACT
    fixture.detectChanges()
    await fixture.whenStable();
    
    // ASSERT
    const matSpinnerEl = ngMocks.findInstances(fixture,MatSpinner);
    const productCardComponentEl = ngMocks.findInstance(fixture,ProductCardComponent,null);
    expect(matSpinnerEl).toBeDefined();
    expect(productCardComponentEl).toBeNull();
  })

  it('should dispatch an action addToCart when handleAddToCart is getting called from ProductCardComponent',async ()=>{
    // ARRANGE
    const fixture = MockRender(ProductsFeatureComponent);
    const storeService = fixture.point.injector.get(Store)
    jest.clearAllMocks(); 
    
    // ACT
    mockStore$.next(mockProducts)
    fixture.detectChanges()
    await fixture.whenStable();
    
    // ASSERT
    const productCardComponentEl = ngMocks.findInstance(fixture,ProductCardComponent);
    productCardComponentEl.addToCart.emit(mockProducts[1]);
    expect(storeService.dispatch).toHaveBeenCalledTimes(1);
    expect(cartActions.addToCart).toHaveBeenCalledTimes(1);
    const {description,...expectedCartItem} = mockProducts[1];
    expect(cartActions.addToCart).toHaveBeenCalledWith({item:expectedCartItem});
  })
});