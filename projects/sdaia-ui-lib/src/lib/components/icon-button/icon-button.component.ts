import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedIconComponent } from '../icon/icon.component';

@Component({
  selector: 'lib-icon-button',
  standalone: true,
  imports: [CommonModule, SharedIconComponent, MatButtonModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class SharedIconButtonComponent {
  @Input({ required: true }) iconName: string = '';
  @Input() disabled: boolean = false;
  @Input() size?: 'small' | 'big';
  @Input() theme?: 'raised' | 'stroked' | 'flat';
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
