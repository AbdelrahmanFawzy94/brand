import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedLanguageMenuComponent } from '@committee-shared';
import { SharedValidationsMessagesComponent, ToasterService } from '@library';
import { LoginStoreService } from './services/login.store.service';
import { catchError, finalize, throwError } from 'rxjs';
import { AppStoreService } from '../../@core/app.store.service';
import { Router } from '@angular/router';
@UntilDestroy()
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SharedValidationsMessagesComponent,
    SharedLanguageMenuComponent,
    MatTooltipModule,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class LoginComponent implements OnInit {
  form!: FormGroup;
  loginApiIsLoading: boolean = false;

  constructor(
    private _FormBuilder: FormBuilder,
    private _Router: Router,
    private _AppStoreService: AppStoreService,
    private _LoginStoreService: LoginStoreService,
    private _ToasterService: ToasterService,
    private _TranslateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this._FormBuilder.group({
      userName: ['superAdmin', [Validators.required]],
      password: ['123@Qwe', [Validators.required]],
    });
  }

  login() {
    if (this.form.valid) {
      this.loginApiIsLoading = true;
      this._LoginStoreService
        .login(this.form.value)
        .pipe(
          untilDestroyed(this),
          finalize(() => (this.loginApiIsLoading = false)),
          catchError((error) => {
            this._ToasterService.openToaster(this._TranslateService.instant('pages.login.failed_login'), 'danger');

            return throwError(() => error);
          })
        )
        .subscribe((loginResponse) => {
          this._ToasterService.openToaster(this._TranslateService.instant('pages.login.success_login'), 'success');

          this._AppStoreService.setCredintials(loginResponse);
          this._Router.navigateByUrl('dashboard');
        });
    }
  }
}
