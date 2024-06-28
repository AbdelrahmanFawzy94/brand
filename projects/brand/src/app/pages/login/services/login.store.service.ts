import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { LoginService } from './login.service';
import { ILoginPayload, ILoginResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginStoreService {
  private state: {
    loginResponse: ILoginResponse | null;
  } = {
    loginResponse: null,
  };

  constructor(private _loginService: LoginService) {}

  setLoginResponse(loginResponse: ILoginResponse) {
    loginResponse ? (this.state = { ...this.state, loginResponse }) : (this.state = { ...this.state, loginResponse: null });
  }

  get getLoginResponse() {
    return this.state.loginResponse;
  }

  // reset state

  resetStore() {
    this.state = {
      loginResponse: null,
    };
  }

  // apis

  login(payload: ILoginPayload): Observable<ILoginResponse> {
    return this._loginService.login(payload).pipe(
      tap((data) => {
        if (data) {
          this.setLoginResponse(data);
        }
      })
    );
  }
}
