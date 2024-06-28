import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { SharedValidationsMessagesComponent } from '@library';

@Component({
  selector: 'lib-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, SharedValidationsMessagesComponent],
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
