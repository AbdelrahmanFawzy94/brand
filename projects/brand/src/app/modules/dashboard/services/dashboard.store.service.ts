import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { DashboardService } from './dashboard.service';
import {
  IGetFilteredResourcesPayload,
  IGetFilteredResourcesResponse,
  IGetLanguagesResponse,
  IGetSupportedDevicesResponse,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardStoreService {
  private state: {
    languages: IGetLanguagesResponse[] | null;
    supportedDevices: IGetSupportedDevicesResponse[] | null;
    filteredResources: IGetFilteredResourcesResponse | null;
  } = {
    languages: null,
    supportedDevices: null,
    filteredResources: null,
  };

  constructor(private _DashboardService: DashboardService) {}

  setLanguages(languages: IGetLanguagesResponse[]) {
    languages ? (this.state = { ...this.state, languages }) : (this.state = { ...this.state, languages: null });
  }

  get getLanguages() {
    return this.state.languages;
  }

  //

  setSupportedDevices(supportedDevices: IGetSupportedDevicesResponse[]) {
    supportedDevices ? (this.state = { ...this.state, supportedDevices }) : (this.state = { ...this.state, supportedDevices: null });
  }

  get getSupportedDevices() {
    return this.state.supportedDevices;
  }

  //

  setFilteredResources(filteredResources: IGetFilteredResourcesResponse) {
    filteredResources ? (this.state = { ...this.state, filteredResources }) : (this.state = { ...this.state, filteredResources: null });
  }

  get getFilteredResources() {
    return this.state.filteredResources;
  }

  // reset state

  resetStore() {
    this.state = {
      languages: null,
      supportedDevices: null,
      filteredResources: null,
    };
  }

  // apis

  getLanguagesResponse(): Observable<IGetLanguagesResponse[]> {
    return this._DashboardService.getLanguagesResponse().pipe(
      tap((data) => {
        if (data) {
          this.setLanguages(data);
        }
      })
    );
  }

  getSupportedDevicesResponse(): Observable<IGetSupportedDevicesResponse[]> {
    return this._DashboardService.getSupportedDevicesResponse().pipe(
      tap((data) => {
        if (data) {
          this.setSupportedDevices(data);
        }
      })
    );
  }

  getFilteredResourcesResponse(payload: IGetFilteredResourcesPayload): Observable<IGetFilteredResourcesResponse> {
    return this._DashboardService.getFilteredResourcesResponse(payload).pipe(
      tap((data) => {
        if (data) {
          this.setFilteredResources(data);
        }
      })
    );
  }
}
