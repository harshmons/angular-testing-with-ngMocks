import { Store } from '@ngrx/store';
import { Subject, of } from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { mockShoppingCart } from '../../../mocks';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { selectCartItems } from '../../store/reducers/shopping-cart.reducer';
import { FeatureModule } from '../feature.module';
import { CartComponent } from './cart.component';

describe('Cart Component', () => {
  let mockStore$ : Subject<any>;
  beforeEach(() => {
    mockStore$ = new Subject();
  })

  beforeEach(() => {
    return MockBuilder(CartComponent, FeatureModule).provide({
      provide:Store,
      useValue:{
        select: jest.fn().mockReturnValue(mockStore$)
      }
    }).keep(ShoppingCartComponent)
  })

  it('should be defined', () => {
    // ACT
    const fixture = MockRender(CartComponent);
    
    // ARRANGE
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should use selector selectCartItems for getting the cart item stored in store', () => {
    // ARRANGE
    const fixture = MockRender(CartComponent);
    const storeService = fixture.point.injector.get(Store);
    
    // ACT
    mockStore$.next(mockShoppingCart);

    // ASSERT
    expect(storeService.select).toHaveBeenCalledWith(selectCartItems);
  })

  it('should render equal ShoppingCartComponent and not render empty cart message as per the cart item stored in store', () => {
    // ARRANGE
    const fixture = MockRender(CartComponent);
    
    // ACT
    mockStore$.next(mockShoppingCart);
    fixture.detectChanges();
    const instances = ngMocks.findInstances(fixture,ShoppingCartComponent); 
    const emptyCartEl = ngMocks.find('[data-testid="empty-cart"]',null);

    // ASSERT
    expect(instances).toHaveLength(mockShoppingCart.length);
    expect(instances[0].item).toEqual(mockShoppingCart[0]);
    expect(instances[1].item).toEqual(mockShoppingCart[1]);
    expect(emptyCartEl).toBeNull();
  })

  it('should render cart empty message and not ShoppingCartComponent if no cart item stored in store', () => {
    // ARRANGE
    const fixture = MockRender(CartComponent);
    
    // ACT
    mockStore$.next([]);
    fixture.detectChanges();
    const emptyCartEl = ngMocks.find('[data-testid="empty-cart"]');
    const shoppingCartInstance = ngMocks.find(ShoppingCartComponent,null); 

    // ASSERT
    expect(emptyCartEl).toBeDefined();
    expect(shoppingCartInstance).toBeNull();
  })

})