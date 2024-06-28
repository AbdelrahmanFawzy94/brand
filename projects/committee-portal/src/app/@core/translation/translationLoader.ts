import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TranslationLoaderService } from './translation-loader.service';

export class TranslationLoader implements TranslateLoader {
  constructor(private readonly _HttpClient: HttpClient, private readonly _TranslationLoaderService: TranslationLoaderService) {}

  getTranslation(lang: string): Observable<any> {
    return this._TranslationLoaderService.getTranslation(lang, this._HttpClient);
  }
}
