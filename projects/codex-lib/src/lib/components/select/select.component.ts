import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedChipComponent, SharedIconComponent, SharedValidationsMessagesComponent } from '@library';

@Component({
  selector: 'lib-select',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    SharedIconComponent,
    SharedValidationsMessagesComponent,
    SharedChipComponent,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedSelectComponent {
  @Input() bindKey: string = 'id';
  @Input() hideValidation: boolean = false;
  @Input() passedFormControl!: FormControl;
  @Input() dropdownList: any[] = [];
  @Input() labelName: string = 'name';
  @Input() placeholder: string = '';
  @Input() bindNames: string[] = [];
  @Input() loading: boolean = false;
  @Input() multiple: boolean = false;
  @Input() appearance: 'fill' | 'outline' = 'outline';

  @Output() onSelection: EventEmitter<any> = new EventEmitter<any>();

  model: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dropdownList'] && this.multiple) {
      this.dropdownList = [
        ...(this.dropdownList as any[]).map((item) => {
          return {
            ...item,
            selectedAllKey: 'selectAll',
          };
        }),
      ];
    }

    if (changes['passedFormControl'] && this.multiple) {
      if (!Array.isArray(this.passedFormControl.value)) {
        this.passedFormControl.reset([]);
      }
    }
  }

  isControlIndeterminate(): boolean {
    let result =
      this.passedFormControl.value &&
      this.passedFormControl.value.length > 0 &&
      this.passedFormControl.value.length != this.dropdownList.length;
    return result;
  }

  isModelIndeterminate(): boolean {
    let result = this.model && this.model.length > 0 && this.model.length != this.dropdownList.length;
    return result;
  }

  searchFn = (term: string, item: any) => {
    return item[this.labelName]?.toLowerCase().includes(term?.toLowerCase());
  };

  emitControlChange() {
    this.onSelection.emit(this.passedFormControl?.value);
  }

  emitModelChange() {
    this.onSelection.emit(this.model);
  }

  // @Input() label: string = '';
  // @Input() placeholder: string = '';
  // @Input() passedFormControl!: FormControl;
  // @Input() appearance: 'fill' | 'outline' = 'outline';
  // @Input() hideValidation: boolean = false;
  // @Input() hint: string = '';
  // @Input() firstIcon!: string;
  // @Input() lastIcon!: string;
  // @Output() onInput = new EventEmitter<string>();
  // @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  // constructor() {}

  // // reactive form input
  // clearControl() {
  //   this.passedFormControl.reset();
  // }

  // // static input
  // clearInput() {
  //   this.input.nativeElement.value = '';
  // }

  // onInputEmit() {
  //   this.onInput.emit(this.input.nativeElement.value);
  // }
}
