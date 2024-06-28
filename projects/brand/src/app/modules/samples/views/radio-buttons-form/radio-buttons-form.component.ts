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
import { GetControlPipe, SharedIconComponent, SharedRadioButtonsComponent } from '@library';

@Component({
  selector: 'app-radio-buttons-form',
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
    SharedRadioButtonsComponent,
    GetControlPipe,
  ],
  templateUrl: './radio-buttons-form.component.html',
  styleUrls: ['./radio-buttons-form.component.scss'],
})
export default class RadioButtonsFormComponent implements OnInit {
  // must have id and disabled
  radioButtonsList: any[] = [
    { id: 1, nameEn: 'name En 1', nameAr: 'اسم 1' },
    { id: 2, nameEn: 'name En 2', nameAr: 'اسم 2' },
    { id: 3, nameEn: 'name En 3', nameAr: 'اسم 3' },
  ];
  form!: FormGroup;

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
      firstControl: [true, [Validators.required, Validators.min(2)]],
      secondControl: [false],
      thirdControl: [false],
    });
  }

  onSelection(value: string | number) {
    console.warn(value);
  }
}
