import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@committee-env/environment';
import { DashboardApiUrls } from '../../modules/dashboard/apis-urls/dashboard.apis';

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
    return httpClient.get(environment.baseUrl + DashboardApiUrls.getResources, {
      params: { culture: lang },
    });
  }
}
