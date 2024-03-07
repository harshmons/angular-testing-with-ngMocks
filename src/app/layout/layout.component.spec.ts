import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { LayoutComponent } from './layout.component';
import { LayoutModule } from "./layout.module"
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

describe('Component : Layout Component', () => {
  beforeEach(() => {
    return MockBuilder(LayoutComponent,LayoutModule);
  });
  it('should be defined', () => {
    const fixture = MockRender(LayoutComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should render navigation bar', () => {
    const fixture = MockRender(LayoutComponent);
    const navbarEl = ngMocks.find(fixture,NavbarComponent,null)
    expect(navbarEl).not.toBeNull();
  });

  it('should render footer', () => {
    const fixture = MockRender(LayoutComponent);
    const footerEl = ngMocks.find(fixture,FooterComponent,null)
    expect(footerEl).not.toBeNull();
  });
});
