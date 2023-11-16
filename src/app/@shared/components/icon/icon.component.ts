import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input({ required: true }) name!: string;
  @Input() isFilled: boolean = false;
}
