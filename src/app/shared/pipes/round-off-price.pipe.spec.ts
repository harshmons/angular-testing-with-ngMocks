import { RoundOffPricePipe } from './round-off-price.pipe';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('Phone Pipe', () => {
  beforeEach(() => {
    return MockBuilder(RoundOffPricePipe).provide(RoundOffPricePipe)
  })
  it('should be defined', () => {
    const fixture = MockRender(RoundOffPricePipe);
    expect(fixture.componentInstance).toBeDefined();
  })
  it('should test the transform value', () => {
    const fixture = MockRender('<p>{{ 1.4 | roundOffPrice }}</p>');
    expect(ngMocks.formatText(fixture)).toBe('1 $');
  })
})