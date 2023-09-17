import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
// document.documentElement.style.setProperty('--primary-hue', '349');

@Directive({
  selector: '[appRipple]',
  standalone: true,
})
export class RippleDirective {
  // @Input() color!: string ; // one of enviroment colors array (system colors) # for later
  @Input() rippleDuraion!: number; // 0 => 2000 ms

  initialPosition: string = '';
  initialOverflow: string = '';

  @HostListener('click', ['$event']) addRippleDiv(event: MouseEvent) {
    this.initialPosition = this.element.nativeElement.style.position;
    this.initialOverflow = this.element.nativeElement.style.overflow;

    this.element.nativeElement.style.position = 'relative';
    this.element.nativeElement.style.overflow = 'hidden';

    this.createChild(event);
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  createChild(event: MouseEvent) {
    const span = this.renderer.createElement('span') as HTMLSpanElement;
    this.renderer.addClass(span, 'ripple');
    this.renderer.setStyle(span, 'animation', `ripple-effect ${this.rippleDuraion}ms`);
    const bounds = this.element.nativeElement.getBoundingClientRect();
    // Get position on X Axis
    const x = event.clientX - bounds.left;
    // Get position on Y Axis
    const y = event.clientY - bounds.top;
    this.renderer.setStyle(span, 'left', `${x}px`);
    this.renderer.setStyle(span, 'top', `${y}px`);
    this.renderer.appendChild(this.element.nativeElement, span);
    this.removeChild(span);
  }

  removeChild(childElement: any) {
    setTimeout(() => {
      this.renderer.removeChild(this.element.nativeElement, childElement);
      this.element.nativeElement.style.position = this.initialPosition;
      this.element.nativeElement.style.overflow = this.initialOverflow;
    }, this.rippleDuraion);
  }
}
