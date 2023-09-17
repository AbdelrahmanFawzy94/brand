import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickPreventDefault]',
  standalone: true,
})
export class ClickPreventDefaultDirective {
  @HostListener('click', ['$event']) preventDefault(event: MouseEvent) {
    event.preventDefault();
  }
}
