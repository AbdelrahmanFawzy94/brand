import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TranslateModule } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedLanguageMenuComponent } from '@committee-shared';
import { SharedValidationsMessagesComponent } from '@library';
import { LoginStoreService } from './services/login.store.service';
import { ILoginResponse } from './models';
import { finalize } from 'rxjs';
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
  loginResponse!: ILoginResponse;
  loginApiIsLoading: boolean = false;

  constructor(private _FormBuilder: FormBuilder, private _LoginStoreService: LoginStoreService) {}

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
          finalize(() => (this.loginApiIsLoading = false))
        )
        .subscribe((loginResponse) => {
          this.loginResponse = loginResponse;
        });
    }
  }
}
