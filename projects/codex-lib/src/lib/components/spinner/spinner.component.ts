import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'lib-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent {
  @Input() strokeWidth: number = 4;
  @Input() size: number = 40;
  @Input() color:
    | 'primary'
    | 'secondry'
    | 'third'
    | 'info'
    | 'warning'
    | 'success'
    | 'danger'
    | 'rose'
    | 'purple'
    | 'white'
    | 'black'
    | 'elements' = 'elements';
}
