import { NavbarComponent } from './navbar.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { Subject, of } from 'rxjs';
import { LayoutModule } from '../layout.module';
import { Store } from '@ngrx/store';
import { mockShoppingCart } from '../../mocks';
import { MatBadge } from '@angular/material/badge';
import { cold, hot } from 'jest-marbles';

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
