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
import { GetControlPipe, SharedIconComponent, SharedSelectComponent } from '@library';

@Component({
  selector: 'app-select-form',
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
    SharedSelectComponent,
    GetControlPipe,
  ],
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
})
export default class SelectComponent implements OnInit {
  aaa = [
    {
      id: '786',
      nameEn: 'text-input',
      nameAr: 'text-input',
      icon: '',
      routing: '/samples/input-form',
      badgeData: '4',
      subDropdowns: [],
    },
    {
      id: '7386',
      nameEn: 'select-input',
      nameAr: 'select-input',
      icon: '',
      routing: '/samples/select-form',
      badgeData: '6',
      subDropdowns: [],
    },
    {
      id: '7876t6',
      nameEn: 'textarea-input',
      nameAr: 'textarea-input',
      icon: '',
      routing: '/samples/textarea-form',
      badgeData: '4',
      subDropdowns: [],
    },
    {
      id: 'fda3',
      nameEn: 'checkbox-input',
      nameAr: 'checkbox-input',
      icon: '',
      routing: '/samples/checkbox-form',
      badgeData: '4',
      subDropdowns: [],
    },
    {
      id: 'kjf9',
      nameEn: 'radio-buttons-input',
      nameAr: 'radio-buttons-input',
      icon: '',
      routing: '/samples/radio-buttons-form',
      badgeData: '4',
      subDropdowns: [],
    },
    {
      id: 'sd87',
      nameEn: 'datepicker-input',
      nameAr: 'datepicker-input',
      icon: '',
      routing: '/samples/datepicker-form',
      badgeData: '4',
      subDropdowns: [],
    },
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
      firstControl: [null, [Validators.required]],
      secondControl: ['', [Validators.required]],
    });
  }

  onSelection(value: string) {
    console.warn(value);
  }
}
