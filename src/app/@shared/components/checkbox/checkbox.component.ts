import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconComponent, SharedValidationsMessagesComponent } from '@shared';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'shared-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, IconComponent, SharedValidationsMessagesComponent],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class SharedCheckboxComponent {
  @Input({ required: true }) label: string = '';
  @Input() passedFormControl!: FormControl;
  @Input() hideValidation: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Output() onToggle = new EventEmitter<boolean>();

  constructor() {}

  // reactive form input

  onToggleReactiveFormEmit(change: MatCheckboxChange) {
    this.onToggle.emit(this.passedFormControl.value);
  }

  // static input

  onToggleEmit(change: MatCheckboxChange) {
    this.onToggle.emit(change.checked);
  }
}
