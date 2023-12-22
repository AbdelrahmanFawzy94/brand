import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardDropDowns, DashboardUser } from '@shared';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss'],
})
export class SamplesComponent {
  dropdowns: DashboardDropDowns[] = [];
  user!: DashboardUser;

  constructor(public http: HttpClient) {
    this.getDropDowns();
    this.getUser();
  }

  getDropDowns() {
    this.http.get<DashboardDropDowns[]>('assets/fakes-json/fake-dropdowns.json').subscribe((dropdowns) => (this.dropdowns = dropdowns));
  }

  getUser() {
    this.http.get<DashboardUser>('assets/fakes-json/fake-user.json').subscribe((user) => (this.user = user));
  }

  onDashboardSearch(value: string) {
    console.log(value);
  }
}
