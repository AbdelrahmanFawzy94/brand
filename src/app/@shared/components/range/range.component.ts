import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { SharedIconComponent, SharedValidationsMessagesComponent } from '@shared';

@Component({
  selector: 'shared-range',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSliderModule, MatButtonModule, SharedIconComponent, SharedValidationsMessagesComponent],
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
})
export class SharedRangeComponent {
  @Input() passedFormControl!: FormControl;
  @Input() disabled: boolean = false;
  @Input() max: number = 999;
  @Input() min: number = 0;
  @Input() stepZise: number = 100;
  @Input() showStepMark: boolean = false;
  @Input() indecatorLabel: string = 'indecator label';
  @Input() hideValidation: boolean = false;
  @Input() passedFirstFormControl!: FormControl;
  @Input() passedSecondFormControl!: FormControl;

  @Output() onInput = new EventEmitter<string>();
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {}

  // static input
  clearInput() {
    this.input.nativeElement.value = '';
  }

  onInputEmit() {
    this.onInput.emit(this.input.nativeElement.value);
  }
}
