import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationApisService {

  constructor(
    private _TranslateService: TranslateService
  ) { }


  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
   * @param {string} key
   */
  instant(key: string): string {
    return this._TranslateService.instant(key);
  }
}
