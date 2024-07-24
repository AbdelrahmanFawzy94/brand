import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-svg-searching-data',
  standalone: true,
  templateUrl: './no-search-data.component.html',
  styleUrls: ['./no-search-data.component.scss'],
})
export class SharedSvgNoSearchDataComponent {
  @Input() message: string = 'searching';
}
