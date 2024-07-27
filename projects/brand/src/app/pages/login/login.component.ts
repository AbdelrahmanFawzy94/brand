import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, finalize, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { SharedLanguageMenuComponent } from '@committee-shared';
import { SharedValidationsMessagesComponent, ToasterService } from '@library';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppStoreService } from '@committee-core';
import { LoginStoreService } from './services/login.store.service';

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
    private _ToasterService: ToasterService
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
            this._ToasterService.openToaster('pages.login.failed_login', 'danger');
            return throwError(() => error);
          })
        )
        .subscribe((loginResponse) => {
          this._ToasterService.openToaster('pages.login.success_login', 'success');
          this._AppStoreService.setCredintials(loginResponse);
          this._Router.navigateByUrl('dashboard');
        });
    }
  }
}
