import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { LayoutComponent } from './layout.component';
import { LayoutModule } from "./layout.module"
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

describe('Component : Layout', () => {
  beforeEach(() => {
    return MockBuilder(LayoutComponent,LayoutModule);
  });
  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(LayoutComponent);
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should render navbar component', () => {
    // ARRANGE
    const fixture = MockRender(LayoutComponent);
    const navbarEl = ngMocks.find(fixture,NavbarComponent,null)
    
    // ASSERT
    expect(navbarEl).not.toBeNull();
  });

  it('should render footer component', () => {
    // ARRANGE
    const fixture = MockRender(LayoutComponent);
    const footerEl = ngMocks.find(fixture,FooterComponent,null)
    
    // ASSERT
    expect(footerEl).not.toBeNull();
  });
});
