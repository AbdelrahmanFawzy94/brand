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
import { GetControlPipe, SharedIconComponent, SharedRangeComponent } from '@library';

@Component({
  selector: 'app-range-form',
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
    SharedRangeComponent,
    GetControlPipe,
  ],
  templateUrl: './range-form.component.html',
  styleUrls: ['./range-form.component.scss'],
})
export default class RangeFormComponent implements OnInit {
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
      firstControl: [100, [Validators.required]],
      secondControl: [150, [Validators.required, Validators.min(400)]],
    });
  }

  onInput(value: string) {
    console.warn(value);
  }
}
