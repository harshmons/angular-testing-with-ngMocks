
import { MockBuilder, MockRender, ngMocks } from "ng-mocks";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { LayoutComponent } from "./layout/layout.component";

describe('Component : AppComponent', () => {
  beforeEach(() => {
    return MockBuilder(AppComponent, AppModule)
  })

  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(AppComponent);
    const component = fixture.point.componentInstance

    // ASSERT
    expect(component).toBeDefined();
  });

  it('should be render layout component', () => {
    // ARRANGE
    const fixture = MockRender(AppComponent);
    const layoutComponent = ngMocks.find(fixture,LayoutComponent,null)

    // ASSERT
    expect(layoutComponent).not.toBeNull();
  });
});
