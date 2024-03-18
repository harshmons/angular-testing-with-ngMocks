import { Directive, HostBinding, HostListener } from '@angular/core';


/**
 * This directive toggles the class "box_shadow" when there is a mouse-over/mouse-out event on host
 *
 * @example
 * <div appHighlight> Hover on me !! </div>
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /**
   * Property to hold true or false based on which it toggles the class box_shadow
   */
  @HostBinding('class.box_shadow') isHover = false;

  /**
   * Listening to mouseover event and setting the property to true
   */
  @HostListener('mouseover')
  onHover() {
    this.isHover = true;
  }

  /**
   * Listening to mouseout event and setting the property to false
   */
  @HostListener('mouseout')
  onLeave() {
    this.isHover = false;
  }

}
