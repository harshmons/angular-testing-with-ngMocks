import { Store } from '@ngrx/store';
import { Subject, of } from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { mockShoppingCart } from '../../../mocks';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { selectCartItems } from '../../store/reducers/shopping-cart.reducer';
import { CartFeatureModule } from '../cart-feature.module';
import { CartFeatureComponent } from './cart-feature.component';

describe('Component : CartFeature', () => {
  let mockStore$ : Subject<any>;
  
  beforeEach(() => {
    mockStore$ = new Subject();
  })

  beforeEach(() => {
    return MockBuilder(CartFeatureComponent, CartFeatureModule).provide({
      provide:Store,
      useValue:{
        select: jest.fn().mockReturnValue(mockStore$)
      }
    }).keep(ShoppingCartComponent)
  })

  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(CartFeatureComponent);
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should use selector selectCartItems for getting the cart items stored in store', () => {
    // ARRANGE
    const fixture = MockRender(CartFeatureComponent);
    const storeService = fixture.point.injector.get(Store);
    
    // ACT
    mockStore$.next(mockShoppingCart);

    // ASSERT
    expect(storeService.select).toHaveBeenCalledTimes(1);
    expect(storeService.select).toHaveBeenCalledWith(selectCartItems);
  })

  it('should render equal ShoppingCartComponent and not render empty cart message as per the cart item stored in store', () => {
    // ARRANGE
    const fixture = MockRender(CartFeatureComponent);
    
    // ACT
    mockStore$.next(mockShoppingCart);
    fixture.detectChanges();
    
    // ASSERT
    const instances = ngMocks.findInstances(fixture,ShoppingCartComponent); 
    expect(instances).toHaveLength(mockShoppingCart.length);
    expect(instances[0].item).toEqual(mockShoppingCart[0]);
    expect(instances[1].item).toEqual(mockShoppingCart[1]);
    const emptyCartEl = ngMocks.find('[data-testid="empty-cart"]',null);
    expect(emptyCartEl).toBeNull();
  })

  it('should render cart empty message and not ShoppingCartComponent if no cart item stored in store', () => {
    // ARRANGE
    const fixture = MockRender(CartFeatureComponent);
    
    // ACT
    mockStore$.next([]);
    fixture.detectChanges();
    
    // ASSERT
    const emptyCartEl = ngMocks.find('[data-testid="empty-cart"]');
    expect(emptyCartEl).toBeDefined();
    const shoppingCartInstance = ngMocks.find(ShoppingCartComponent,null); 
    expect(shoppingCartInstance).toBeNull();
  })
})