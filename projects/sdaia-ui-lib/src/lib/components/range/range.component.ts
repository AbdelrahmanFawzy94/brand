import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { SharedIconComponent, SharedValidationsMessagesComponent } from '@library';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'lib-range',
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

  currentLang: 'ar' | string = '';
  showComponent = true;

  constructor(private _TranslateService: TranslateService) {
    this._TranslateService.onLangChange.pipe(untilDestroyed(this)).subscribe((LangChangeEvent) => {
      this.currentLang = LangChangeEvent.lang;
      this.showComponent = false;
      setTimeout(() => {
        this.showComponent = true;
      }, 1);
    });
  }

  // static input
  clearInput() {
    this.input.nativeElement.value = '';
  }

  onInputEmit() {
    this.onInput.emit(this.input.nativeElement.value);
  }
}
