import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '@library';
import {
  IGetFilteredResourcesPayload,
  IGetFilteredResourcesResponse,
  IGetLanguagesResponse,
  IGetSupportedDevicesResponse,
} from '../models';
import { DashboardApiUrls } from '../apis-urls/dashboard.apis';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpService) {}

  getLanguagesResponse(): Observable<IGetLanguagesResponse[]> {
    return this.http.get(DashboardApiUrls.getLanguages);
  }

  getSupportedDevicesResponse(): Observable<IGetSupportedDevicesResponse[]> {
    return this.http.get(DashboardApiUrls.getSupportedDevices);
  }

  getFilteredResourcesResponse(payload: IGetFilteredResourcesPayload): Observable<IGetFilteredResourcesResponse> {
    return this.http.post(DashboardApiUrls.getFilteredResources, payload);
  }
}
