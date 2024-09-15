import { Injectable } from '@angular/core';

import { ILoginResponse } from '../pages/login/models';
import { LocalStorageService } from '../../../../codex-lib/src';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

interface AppState {
  defaultLanguage: 'ar' | 'en' | null;
  credintials: ILoginResponse | null;
  theme: 'dark' | 'light' | null;
}

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  private localStorageStateKeyName = 'app-state';
  private state: AppState = {
    defaultLanguage: null,
    credintials: null,
    theme: null,
  };

  private appState$ = new BehaviorSubject(
    this._LocalStorageService.getItem(environment.applicationName, this.localStorageStateKeyName) ?? this.state
  );

  appStateChanges$!: Observable<AppState>;

  setDefaultLanguage(defaultLanguage: 'ar' | 'en' | null) {
    defaultLanguage ? (this.state = { ...this.state, defaultLanguage }) : (this.state = { ...this.state, defaultLanguage: null });
    this.updateObservableState();
  }

  get getDefaultLanguage() {
    return this.state.defaultLanguage;
  }

  //

  setCredintials(credintials: ILoginResponse | null) {
    credintials ? (this.state = { ...this.state, credintials }) : (this.state = { ...this.state, credintials: null });
    this.updateObservableState();
  }

  get getCredintials() {
    return this.state.credintials;
  }

  //

  setTheme(theme: 'dark' | 'light' | null) {
    theme ? (this.state = { ...this.state, theme }) : (this.state = { ...this.state, theme: null });
    this.updateObservableState();
  }

  get getTheme() {
    return this.state.theme;
  }

  // reset state

  resetStore() {
    this.state = {
      defaultLanguage: null,
      credintials: null,
      theme: null,
    };
  }

  // update the stream

  updateObservableState() {
    this.appState$.next(this.state);
  }

  constructor(private _LocalStorageService: LocalStorageService) {
    this.appState$.subscribe((state) => {
      _LocalStorageService.setItem(environment.applicationName, this.localStorageStateKeyName, state);
      this.state = state;
      this.appStateChanges$ = of(state);
    });
  }
}
