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
import { GetControlPipe, SharedIconComponent, SharedSlideToggleComponent } from '@library';

@Component({
  selector: 'app-slide-toggle-form',
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
    GetControlPipe,
    SharedSlideToggleComponent,
  ],
  templateUrl: './slide-toggle-form.component.html',
  styleUrls: ['./slide-toggle-form.component.scss'],
})
export default class SlideToggleFormComponent implements OnInit {
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
      firstControl: [true, [Validators.requiredTrue]],
      secondControl: [{ value: true, disabled: true }],
      thirdControl: [false],
    });
  }

  onToggle(value: boolean) {
    console.warn(value);
  }
}
