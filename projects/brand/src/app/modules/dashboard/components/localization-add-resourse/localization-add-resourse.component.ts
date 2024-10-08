import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  GetControlPipe,
  SharedButtonComponent,
  SharedIconComponent,
  SharedInputComponent,
  SharedSelectComponent,
  ToasterService,
} from '@library';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, finalize, throwError } from 'rxjs';
import { IAddResourcePayload, IGetLanguagesResponse, IGetSupportedDevicesResponse } from '../../models';
import { DashboardStoreService } from '../../services/dashboard.store.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationApisService } from '@brand-core';
import { HttpErrorResponse } from '@angular/common/http';

@UntilDestroy()
@Component({
  selector: 'localization-add-resourse',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    GetControlPipe,
    SharedSelectComponent,
    SharedInputComponent,
    SharedButtonComponent,
    SharedIconComponent,
    TranslateModule,
  ],
  templateUrl: './localization-add-resourse.component.html',
  styleUrls: ['./localization-add-resourse.component.scss'],
})
export default class LocalizationAddResourseComponent implements OnInit {
  languages: IGetLanguagesResponse[] = [];
  supportedDevices: IGetSupportedDevicesResponse[] = [];

  addResourceIsLoading: boolean = false;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _FormBuilder: FormBuilder,
    private _DialogRef: MatDialogRef<LocalizationAddResourseComponent>,
    private _DashboardStoreService: DashboardStoreService,
    private _ToasterService: ToasterService,
    private _TranslationApisService: TranslationApisService
  ) {}

  ngOnInit(): void {
    this.getLanguages();
    this.getSupportedDevice();
    this.createForm();
  }

  createForm() {
    this.form = this._FormBuilder.group({
      language: [1, [Validators.required]],
      supportedDevices: [1, [Validators.required]],
      translationKey: [null, [Validators.required]],
      translationKeyValue: [null, [Validators.required]],
    });
  }

  getLanguages() {
    this.languages = this._DashboardStoreService.getLanguages!;
  }

  getSupportedDevice() {
    this.supportedDevices = this._DashboardStoreService.getSupportedDevices!;
  }

  submit() {
    if (this.form.valid) {
      let payload: IAddResourcePayload = {
        localizationLanguageId: this.form.value.language,
        key: this.form.value.translationKey,
        resourceType: this.form.value.supportedDevices,
        text: this.form.value.translationKeyValue,
        version: '0.0.0',
      };

      this.addResourceIsLoading = true;

      this._DashboardStoreService
        .addResource(payload)
        .pipe(
          untilDestroyed(this),
          finalize(() => (this.addResourceIsLoading = false)),
          catchError((error: HttpErrorResponse) => {
            this._ToasterService.openToaster(
              this._TranslationApisService.instant('dashboard.pages.localization.added_failed'),
              // TODO adding Dto
              this._TranslationApisService.instant((error.error as { Message: string; StatusCode: number }).Message),
              'danger'
            );
            return throwError(() => error);
          })
        )
        .subscribe((data) => {
          this._ToasterService.openToaster(
            this._TranslationApisService.instant('dashboard.pages.localization.added_successfuly'),
            null,
            'success'
          );
          data && data.isSuccessfull ? this._DialogRef.close({ isConfirmed: true }) : this._DialogRef.close({ isConfirmed: false });
        });
    }
  }
}
