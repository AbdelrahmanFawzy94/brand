import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedIconComponent, SharedValidationsMessagesComponent } from '@library';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, SharedIconComponent, SharedValidationsMessagesComponent],
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
  @Input() firstIcon!: string;
  @Input() lastIcon!: string;
  @Output() onInput = new EventEmitter<string>();
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

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
