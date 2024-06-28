import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Day_Enum, GetControlPipe, Month_Enum, SharedDatepickerComponent, SharedIconComponent } from '@library';

@Component({
  selector: 'app-datepicker-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    TranslateModule,
    SharedIconComponent,
    SharedDatepickerComponent,
    GetControlPipe,
  ],
  templateUrl: './datepicker-form.component.html',
  styleUrls: ['./datepicker-form.component.scss'],
})
export default class DatePickerFormComponent implements OnInit {
  form!: FormGroup;
  months = Month_Enum;
  days = Day_Enum;

  showCopyToaster(className: string) {
    this._MatSnackBar.open(
      `${className} ${this._TranslateService.instant('shared.toaster.copyed')}`,
      this._TranslateService.instant('shared.buttons.close')
    );
  }

  constructor(private _FormBuilder: FormBuilder, private _MatSnackBar: MatSnackBar, private _TranslateService: TranslateService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this._FormBuilder.group({
      firstControl: ['', [Validators.required]],
      secondControl: ['', [Validators.required]],
    });
  }

  onInput(value: string) {
    console.warn(value);
  }
}
