import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
import { SamplesApiUrls } from '../apis-urls/samples.apis-urls';
import { IDashboardDropDowns, IDashboardUser, HttpService } from '@library';

@Injectable({
  providedIn: 'root',
})
export class SamplesService {
  constructor(private http: HttpService) {}

  getSamplesIDashboardDropDowns(): Observable<IDashboardDropDowns[]> {
    return this.http.get(SamplesApiUrls.IDashboardDropDowns);
  }

  getSamplesIDashboardUser(): Observable<IDashboardUser> {
    return this.http.get(SamplesApiUrls.IDashboardUser);
  }

  getTableData(): Observable<any> {
    return this.http.get(SamplesApiUrls.tableData);
  }

  // dummy

  // getTest(reportId: string): Observable<IApisResponse> {
  getTest(reportId: string): Observable<any> {
    return this.http.get(`test/${reportId}`);
  }

  // getVirtaulCourtsReqReport(body: IVirtaulCourtsReqBody): Observable<IApisResponse>  {
  addTest(body: any): Observable<any> {
    return this.http.post('test', body);
  }

  upload(body: any): Observable<HttpResponse<Blob>> {
    return this.http.postFile('test', body);
  }
}
