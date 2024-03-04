import { Component } from "@angular/core";
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { HighlightDirective } from './highlight.directive';


/**
 * NOTE - Here we can test some more things like Directive property isHover is setting True/False on mouseover/mouseout.
 * But there is no extra value addition to write the test case,Instead we
 * should write the limited test cases but should be from end user prespective or testing the behaviour
 * Aproach here is to simuate the mouserover and mouseout event to test whether the class is getting attached/removed or not
 *  */ 


@Component({
  template: `<div appHighlight></div>`
})
class HostComponent { }

describe('Directive : Highlight', () => {
  beforeEach(() => {
    return MockBuilder(HostComponent).keep(HighlightDirective);
  })

  it('should be defined', () => {
    // ARRANGE
    const fixture = MockRender(HostComponent);
    
    // ASSERT
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should add class as box_shadow on mouseover event', () => {
    // ARRANGE
    const fixture = MockRender(HostComponent);
    const el = ngMocks.find('div');
    
    // ACT
    ngMocks.trigger(el, 'mouseover');
    fixture.detectChanges();
    
    // ASSERT
    expect(ngMocks.formatHtml(fixture)).toContain('box_shadow');
  });

  it('should remove class as box_shadow on mouseout event', () => {
    // ARRANGE
    const fixture = MockRender(HostComponent);
    const el = ngMocks.find('div');
    
    // ACT
    ngMocks.trigger(el, 'mouseout');
    fixture.detectChanges();
    
    // ASSERT
    expect(ngMocks.formatHtml(fixture)).not.toContain('box_shadow');
  });
})