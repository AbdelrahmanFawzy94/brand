import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export default class ColorsComponent {
  constructor() {}
}
