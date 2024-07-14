import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-svg-no-data',
  standalone: true,
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class SharedSvgNoDataComponent {
  @Input() message: string = 'no data found';
}
