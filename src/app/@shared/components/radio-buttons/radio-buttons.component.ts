import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconComponent, SharedValidationsMessagesComponent } from '@shared';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'shared-radio-buttons',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule, IconComponent, SharedValidationsMessagesComponent],
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
})
export class SharedRadioButtonsComponent {
  @Input() passedFormControl!: FormControl;
  @Input() name!: string;
  @Input() hideValidation: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input({ required: true }) labelkey!: string;
  @Input() radioButtonsList: any[] = [];
  @Output() onSelection = new EventEmitter<string | number>();

  constructor() {}

  // reactive form input

  onSelectionReactiveFormEmit(change: MatRadioChange) {
    this.onSelection.emit(this.passedFormControl.value);
  }

  // static input

  onSelectionMatRadioChangeEmit(change: MatRadioChange) {
    this.onSelection.emit(change.value as string | number);
  }
}
