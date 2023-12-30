import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[sharedInputPreventDefault]',
  standalone: true,
})
export class ClickPreventDefaultDirective {
  @HostListener('click', ['$event']) preventDefault(event: MouseEvent) {
    event.preventDefault();
  }
}
