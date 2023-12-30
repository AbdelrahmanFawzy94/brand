import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, SharedValidationsMessagesComponent } from '@shared';

@Component({
  selector: 'shared-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, IconComponent, SharedValidationsMessagesComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class SharedInputComponent {
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
  clearInput() {
    this.input.nativeElement.value = '';
  }

  onInputEmit() {
    this.onInput.emit(this.input.nativeElement.value);
  }
}
