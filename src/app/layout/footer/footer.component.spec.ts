import { MockBuilder, MockRender } from 'ng-mocks';
import { FooterComponent } from '../footer/footer.component';

describe('Component : Footer', () => {
  beforeEach(() => {
    return MockBuilder(FooterComponent);
  });
  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(FooterComponent);
    
    // ASSERT
    expect(fixture.componentInstance).toBeDefined();
  });
});
