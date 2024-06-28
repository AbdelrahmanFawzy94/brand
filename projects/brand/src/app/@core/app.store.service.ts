import { Injectable } from '@angular/core';

import { ILoginResponse } from '../pages/login/models';
import { LocalStorageService } from '../../../../codex-lib/src';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  private state: {
    defaultLanguage: 'ar-sa' | 'en' | null;
    credintials: ILoginResponse | null;
    theme: 'dark' | 'light' | null;
  } = {
    defaultLanguage: null,
    credintials: null,
    theme: null,
  };
  private initialAppState$ = new BehaviorSubject(this.state);

  constructor(private _LocalStorageService: LocalStorageService) {}

  setDefaultLanguage(defaultLanguage: 'ar-sa' | 'en' | null) {
    defaultLanguage ? (this.state = { ...this.state, defaultLanguage }) : (this.state = { ...this.state, defaultLanguage: null });
  }

  get getDefaultLanguage() {
    return this.state.defaultLanguage;
  }

  //

  setCredintials(credintials: ILoginResponse | null) {
    credintials ? (this.state = { ...this.state, credintials }) : (this.state = { ...this.state, credintials: null });
  }

  get getCredintials() {
    return this.state.credintials;
  }

  // reset state

  resetStore() {
    this.state = {
      defaultLanguage: null,
      credintials: null,
      theme: null,
    };
  }
}
