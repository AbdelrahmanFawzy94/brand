import { Component } from '@angular/core';
import { SamplesStoreService } from './services/samples.store.service'; // TODO @samples
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DashboardDropDowns, DashboardUser } from '@library';

@UntilDestroy()
@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss'],
})
export class SamplesComponent {
  dropdowns: DashboardDropDowns[] = [];
  user!: DashboardUser;

  constructor(private _samplesStoreService: SamplesStoreService) {
    this.getDropDowns();
    this.getUser();
  }

  getDropDowns() {
    this._samplesStoreService.getDashboardDropdowns
      ? (this.dropdowns = this._samplesStoreService.getDashboardDropdowns)
      : this._samplesStoreService
          .getSamplesDashboardDropdowns()
          .pipe(untilDestroyed(this))
          .subscribe((dropdowns) => (this.dropdowns = dropdowns));
  }

  getUser() {
    this._samplesStoreService.getDashboardUser
      ? (this.user = this._samplesStoreService.getDashboardUser)
      : this._samplesStoreService
          .getSamplesDashboardUser()
          .pipe(untilDestroyed(this))
          .subscribe((dashboardUser) => (this.user = dashboardUser));
  }

  onDashboardSearch(value: string) {
    console.log(value);
  }
}
