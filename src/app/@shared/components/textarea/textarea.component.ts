import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedIconComponent, SharedValidationsMessagesComponent } from '@shared';

@Component({
  selector: 'shared-textarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, SharedIconComponent, SharedValidationsMessagesComponent],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class SharedTextareaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() passedFormControl!: FormControl;
  @Input() appearance: 'fill' | 'outline' = 'outline';
  @Input() hideValidation: boolean = false;
  @Input() hint: string = '';
  @Input() matPrefixIconName!: string;
  @Input() matSuffixIconName!: string;
  @Output() onInput = new EventEmitter<string>();
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {}

  // reactive form input
  clearControl() {
    this.passedFormControl.reset();
  }

  // static input
  clearTextArea() {
    this.input.nativeElement.value = '';
  }

  onInputEmit() {
    this.onInput.emit(this.input.nativeElement.value);
  }
}
