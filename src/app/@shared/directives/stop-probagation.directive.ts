import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopProbagation]',
  standalone: true,
})
export class StopProbagationDirective {
  @HostListener('click', ['$event']) stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
