import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SamplesService } from './samples.service';
import { IDashboardDropDowns, IDashboardUser } from '@library';
// import {  IApisResponse, IChart } from '@brand-shared';

@Injectable({
  providedIn: 'root',
})
export class SamplesStoreService {
  private state: {
    IDashboardDropDowns: IDashboardDropDowns[] | null;
    IDashboardUser: IDashboardUser | null;
    tableData: any;
  } = {
    IDashboardDropDowns: null,
    IDashboardUser: null,
    tableData: undefined,
  };

  constructor(private _samplesService: SamplesService) {}

  setIDashboardDropDowns(dropdowns: IDashboardDropDowns[]) {
    dropdowns
      ? (this.state = { ...this.state, IDashboardDropDowns: dropdowns })
      : (this.state = { ...this.state, IDashboardDropDowns: null });
  }

  get getIDashboardDropDowns() {
    this.state = { ...this.state };
    return this.state.IDashboardDropDowns;
  }

  setIDashboardUser(IDashboardUser: IDashboardUser) {
    IDashboardUser ? (this.state = { ...this.state, IDashboardUser }) : (this.state = { ...this.state, IDashboardUser: null });
  }

  get getIDashboardUser() {
    this.state = { ...this.state };
    return this.state.IDashboardUser;
  }

  setTableData(tableData: any) {
    tableData ? (this.state = { ...this.state, tableData }) : (this.state = { ...this.state, tableData: null });
  }

  get getTableData() {
    this.state = { ...this.state };
    return this.state.tableData;
  }

  // reset state

  resetStore() {
    this.state = {
      IDashboardDropDowns: null,
      IDashboardUser: null,
      tableData: undefined,
    };
  }

  // apis

  getSamplesIDashboardDropDowns(): Observable<IDashboardDropDowns[]> {
    return this._samplesService.getSamplesIDashboardDropDowns().pipe(
      tap((data) => {
        if (data) {
          this.setIDashboardDropDowns(data);
        }
      })
    );
  }

  getSamplesIDashboardUser(): Observable<IDashboardUser> {
    return this._samplesService.getSamplesIDashboardUser().pipe(
      tap((data) => {
        if (data) {
          this.setIDashboardUser(data);
        }
      })
    );
  }

  getSamplesTableData(): Observable<any> {
    return this._samplesService.getTableData().pipe(
      tap((data) => {
        if (data) {
          this.setTableData(data);
        }
      })
    );
  }
}
