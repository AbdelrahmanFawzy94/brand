import { Component } from '@angular/core';
import { SamplesStoreService } from './services/samples.store.service'; // TODO @samples
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IDashboardDropDowns, IDashboardUser } from '@library';

@UntilDestroy()
@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss'],
})
export class SamplesComponent {
  dropdowns: IDashboardDropDowns[] = [];
  user!: IDashboardUser;

  constructor(private _samplesStoreService: SamplesStoreService) {
    this.getDropDowns();
    this.getUser();
  }

  getDropDowns() {
    this._samplesStoreService.getIDashboardDropDowns
      ? (this.dropdowns = this._samplesStoreService.getIDashboardDropDowns)
      : this._samplesStoreService
          .getSamplesIDashboardDropDowns()
          .pipe(untilDestroyed(this))
          .subscribe((dropdowns) => (this.dropdowns = dropdowns));
  }

  getUser() {
    this._samplesStoreService.getIDashboardUser
      ? (this.user = this._samplesStoreService.getIDashboardUser)
      : this._samplesStoreService
          .getSamplesIDashboardUser()
          .pipe(untilDestroyed(this))
          .subscribe((IDashboardUser) => (this.user = IDashboardUser));
  }

  onDashboardSearch(value: string) {
    console.log(value);
  }
}
