import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localizationUrls } from '@core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class TranslationLoaderService {
  constructor() {}

  // GetTranslation(lang: string, httpClient: HttpClient): Observable<any> {
  //   return httpClient.get(environment.baseUrl + TranslationProxy.getResources, {
  //     params: { culture: lang, forceUpdate: true },
  //   });
  // }

  getTranslation(lang: string, httpClient: HttpClient): Observable<any> {
    return httpClient.get(environment.baseUrl + localizationUrls.getResources, {
      params: { culture: lang },
    });
  }
}
