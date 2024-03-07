import { RoundOffPricePipe } from './round-off-price.pipe';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('Pipe : RoundOffPrice', () => {
  beforeEach(() => {
    return MockBuilder(RoundOffPricePipe).provide(RoundOffPricePipe)
  })
  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(RoundOffPricePipe);
    
    // ASSERT
    expect(fixture.point.componentInstance).toBeDefined();
  })
  it('should transform 1.5 to 2 $', () => {
    // ARRANGE
    const fixture = MockRender('<p>{{ 1.5 | roundOffPrice }}</p>');
    
    // ASSERT
    expect(ngMocks.formatText(fixture)).toBe('2 $');
    // ngMock.formatText -> Returns the parsed content -> 2 $
    // ngMocks.formatHtml -> Returns the full HTML content -> <p>2 $</p>
  })

  it('should transform 1.4 to 1 $', () => {
    // ARANGE
    const fixture = MockRender('<p>{{ 1.4 | roundOffPrice }}</p>');
    
    // ASSERT
    expect(ngMocks.formatText(fixture)).toBe('1 $');
  })
})