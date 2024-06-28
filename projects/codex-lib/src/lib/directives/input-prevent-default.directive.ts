import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[libInputPreventDefault]',
  standalone: true,
})
export class InputPreventDefaultDirective {
  @HostListener('input', ['$event']) preventDefault(event: MouseEvent) {
    event.preventDefault();
  }
}
