import { NavbarComponent } from './navbar.component';
import { FORMAT_SINGLE, MockBuilder, MockRender, NG_MOCKS_ROOT_PROVIDERS, ngMocks } from 'ng-mocks';
import { Subject, of } from 'rxjs';
import { LayoutModule } from '../layout.module';
import { Store } from '@ngrx/store';
import { mockShoppingCart } from '../../mocks';
import { MatBadge } from '@angular/material/badge';
import { cold, hot } from 'jest-marbles';
import { RouterLink, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Navbar component One way', () => {
  // In this we are asserting the count on the rendered HTML
  
  let mockStore$ : Subject<any>;
  beforeEach(() => {
    mockStore$ = new Subject();
    jest.clearAllMocks();
  })

  beforeEach(() => {
    return MockBuilder(NavbarComponent, LayoutModule).provide({provide:Store,useValue:{
      select: jest.fn().mockReturnValue(mockStore$),
    }})
  });

  it('should be defined', () => {
    const fixture = MockRender(NavbarComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should render the correct cart count in mat-icon', async () => {
    const fixture = MockRender(NavbarComponent);
    mockStore$.next(mockShoppingCart.length)
    const matBadge = ngMocks.findInstance(fixture,MatBadge)
    fixture.detectChanges();
    expect(matBadge.content).toBe(mockShoppingCart.length);
  });

  it('should map the correct route', () => {
    // NOTE - This is just for demo purpose,It doesn't gives you that much value after writing it
    // because here we are testing the complete DOM with static URLs which anyways gets tested by Automation suite also manual testing by developer and QA team
    // ARRANGE
    const fixture = MockRender(NavbarComponent);
    fixture.detectChanges();

    // ACT
    const homeAnchorEl = ngMocks.find('[data-testid="home-route"]');
    const cartAnchorEl = ngMocks.find('[data-testid="cart-route"]');
    const addNewProductAnchorEl = ngMocks.find('[data-testid="add-new-product-route"]');
    
    // ASSERT
    expect(homeAnchorEl.properties['outerHTML']).toMatch('routerlink="/"');
    expect(cartAnchorEl.properties['outerHTML']).toMatch('routerlink="/cart"');
    expect(addNewProductAnchorEl.properties['outerHTML']).toMatch('routerlink="/products/add-new-product"');
  });

});
describe('Navbar component Other Way', () => {
// In this we are asserting only the count observable through jest marbel
  beforeEach(() => {
    return MockBuilder(NavbarComponent, LayoutModule).provide({provide:Store,useValue:{
      select: jest.fn().mockReturnValue(hot('-a|',{a:mockShoppingCart.length}))
    }})
  });

  it('should be defined', () => {
    const fixture = MockRender(NavbarComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  
  it('should have the correct data in count$', async () => {
    const fixture = MockRender(NavbarComponent);
    const expected = cold('-a|',{a:mockShoppingCart.length});
    expect(fixture.componentInstance.count$).toBeObservable(expected);
  });
});
