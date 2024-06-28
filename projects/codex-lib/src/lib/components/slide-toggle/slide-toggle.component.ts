import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedIconComponent, SharedValidationsMessagesComponent } from '@library';

@Component({
  selector: 'lib-slide-toggle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSlideToggleModule, SharedIconComponent, SharedValidationsMessagesComponent],
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SharedSlideToggleComponent {
  @Input({ required: true }) label: string = '';
  @Input() passedFormControl!: FormControl;
  @Input() hideValidation: boolean = false;
  @Input() disabled: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Output() onToggle = new EventEmitter<boolean>();

  constructor() {}

  // reactive form input

  onToggleReactiveFormEmit(change: MatSlideToggleChange) {
    this.onToggle.emit(this.passedFormControl.value);
  }

  // static input

  onToggleEmit(change: MatSlideToggleChange) {
    this.onToggle.emit(change.checked);
  }
}
