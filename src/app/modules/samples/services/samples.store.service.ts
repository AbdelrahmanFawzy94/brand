import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SamplesService } from './samples.service';
import { DashboardDropDowns, DashboardUser } from '@shared';
// import {  IApisResponse, IChart } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class SamplesStoreService {
  private state: {
    dashboardDropdowns: DashboardDropDowns[] | null;
    dashboardUser: DashboardUser | null;
  } = {
    dashboardDropdowns: null,
    dashboardUser: null,
  };

  constructor(private _samplesService: SamplesService) {}

  setDashboardDropdowns(dropdowns: DashboardDropDowns[]) {
    dropdowns
      ? (this.state = { ...this.state, dashboardDropdowns: dropdowns })
      : (this.state = { ...this.state, dashboardDropdowns: null });
  }

  get getDashboardDropdowns() {
    this.state = { ...this.state };
    return this.state.dashboardDropdowns;
  }

  setDashboardUser(dashboardUser: DashboardUser) {
    dashboardUser ? (this.state = { ...this.state, dashboardUser }) : (this.state = { ...this.state, dashboardUser: null });
  }

  get getDashboardUser() {
    this.state = { ...this.state };
    return this.state.dashboardUser;
  }

  // reset state

  resetStore() {
    this.state = {
      dashboardDropdowns: null,
      dashboardUser: null,
    };
  }

  // apis

  getSamplesDashboardDropdowns(): Observable<DashboardDropDowns[]> {
    return this._samplesService.getSamplesDashboardDropdowns().pipe(
      tap((data) => {
        if (data) {
          this.setDashboardDropdowns(data);
        }
      })
    );
  }

  getSamplesDashboardUser(): Observable<DashboardUser> {
    return this._samplesService.getSamplesDashboardUser().pipe(
      tap((data) => {
        if (data) {
          this.setDashboardUser(data);
        }
      })
    );
  }
}
