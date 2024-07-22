import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '@library';
import {
  IAddEditDeleteResponse,
  IAddResourcePayload,
  IEditResourcePayload,
  IGetFilteredResourcesPayload,
  IGetFilteredResourcesResponse,
  IGetLanguagesResponse,
  IGetSupportedDevicesResponse,
} from '../models';
import { DashboardApiUrls } from '../apis-urls/dashboard.apis';
import { IDeletionPayload } from '../models/delete-payload';

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

  addResource(payload: IAddResourcePayload): Observable<IAddEditDeleteResponse> {
    return this.http.post(DashboardApiUrls.addResource, payload);
  }

  editResource(payload: IEditResourcePayload): Observable<IAddEditDeleteResponse> {
    return this.http.put(DashboardApiUrls.editResource, payload);
  }

  DeleteResource(payload: IDeletionPayload): Observable<IAddEditDeleteResponse> {
    return this.http.post(DashboardApiUrls.deleteResource, payload);
  }
}
