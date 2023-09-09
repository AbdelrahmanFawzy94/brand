import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export default class IconComponent {
  @Input({ required: true }) name!: string;
  @Input() isFilled: boolean = false;
}
