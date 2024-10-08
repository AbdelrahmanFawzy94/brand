import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from '..';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, SpinnerComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class SharedButtonComponent {
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() size?: 'small' | 'big';
  @Input() theme?: 'raised' | 'stroked' | 'flat';
  @Input() borderRadius?: 'none' | 'tiny' | 'soft' | 'medium' | 'large' | 'rounded' | 'circle' = 'rounded';
  @Input() color?:
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
    | 'elements';
  @Output() onClick = new EventEmitter();

  constructor() {}

  click() {
    this.onClick.emit();
  }
}
