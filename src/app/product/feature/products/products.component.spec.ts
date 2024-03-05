import { ProductsComponent } from './products.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from '../../../app.module';
import { ProductService } from '../../../core/services/product/product.service';
import {mockProducts,mockProduct} from "../../../mocks"
import { of, EMPTY, Subject } from 'rxjs';
import { cold } from 'jest-marbles';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions/products.actions';
import * as cartActions from '../../../cart/store';
import { ProductCardComponent } from '../../components';
import { FeatureModule } from '../feature.module';
import { MatSpinner } from '@angular/material/progress-spinner';

jest.spyOn(actions,'getProductList')
jest.spyOn(cartActions,'addToCart')

describe('ProductsComponent', () => {
  let mockStore$ : Subject<any>;
  beforeEach(() => {
    mockStore$ = new Subject();
    jest.clearAllMocks();
  })

  beforeEach(() =>
    MockBuilder(ProductsComponent, FeatureModule).provide({
      provide:Store,
      useValue:{
        select: jest.fn().mockReturnValue(mockStore$),
        dispatch: jest.fn()
      }
    }).keep(ProductCardComponent)
  );

  it('should render the component', () => {
    const fixture = MockRender(ProductsComponent);
    expect(fixture).toBeDefined();
  });

  it('should dispatch the action',()=>{
    // ARRANGE
    const fixture = MockRender(ProductsComponent);

    // ASSERT
    const storeService = fixture.point.injector.get(Store)
    expect(storeService.dispatch).toHaveBeenCalledTimes(1);
    expect(actions.getProductList).toHaveBeenCalledTimes(1);
    expect(actions.getProductList).toHaveBeenCalledWith();
  })

  it('should set the input of ProductCardComponent with store value and spinner should not be visible',async ()=>{
    // ARRANGE
    const fixture = MockRender(ProductsComponent);
    
    // ACT
    mockStore$.next(mockProducts)
    fixture.detectChanges()
    await fixture.whenStable();
    const productCardComponentEl = ngMocks.findInstances(fixture,ProductCardComponent);
    const matSpinnerEl = ngMocks.findInstance(fixture,MatSpinner,null);

    // ASSERT
    expect(productCardComponentEl).toHaveLength(mockProducts.length);
    expect(productCardComponentEl[0].product).toEqual(mockProducts[0]);
    expect(productCardComponentEl[1].product).toEqual(mockProducts[1])
    expect(matSpinnerEl).toBeNull()
  })

  it('should render the spinner and not the ProductCardComponent if there is no data in store for list of products',async ()=>{
    // ARRANGE
    const fixture = MockRender(ProductsComponent);
    
    // ACT
    fixture.detectChanges()
    await fixture.whenStable();
    const matSpinnerEl = ngMocks.findInstances(fixture,MatSpinner);
    const productCardComponentEl = ngMocks.findInstance(fixture,ProductCardComponent,null);
    
    // ASSERT
    expect(matSpinnerEl).toBeDefined();
    expect(productCardComponentEl).toBeNull();
    
  })

  it('should dispatch an action addToCart when handleAddToCart is getting called from ProductCardComponent',async ()=>{
    // ARRANGE
    const fixture = MockRender(ProductsComponent);
    const storeService = fixture.point.injector.get(Store)
    jest.clearAllMocks(); 
    
    // ACT
    mockStore$.next(mockProducts)
    fixture.detectChanges()
    await fixture.whenStable();
    const productCardComponentEl = ngMocks.findInstance(fixture,ProductCardComponent);
    productCardComponentEl.onAddToCart.emit(mockProducts[1]);
    
    // ASSERT
    expect(storeService.dispatch).toHaveBeenCalledTimes(1);
    expect(cartActions.addToCart).toHaveBeenCalledTimes(1);
    const {description,...expectedCartItem} = mockProducts[1];
    expect(cartActions.addToCart).toHaveBeenCalledWith({item:expectedCartItem});
  })

});