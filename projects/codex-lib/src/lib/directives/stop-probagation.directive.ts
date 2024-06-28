import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[libStopProbagation]',
  standalone: true,
})
export class SharedStopProbagationDirective {
  @HostListener('click', ['$event']) stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
