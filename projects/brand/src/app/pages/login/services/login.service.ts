import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '@library';
import { LoginApiUrls } from '../apis-urls/login.apis-urls';
import { ILoginPayload, ILoginResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpService) {}

  login(payload: ILoginPayload): Observable<ILoginResponse> {
    return this.http.post(LoginApiUrls.login, payload);
  }
}
