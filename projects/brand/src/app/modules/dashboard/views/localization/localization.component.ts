import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GetControlPipe,
  SharedButtonComponent,
  SharedIconComponent,
  SharedInputComponent,
  SharedSelectComponent,
  SharedtableComponent,
} from '@library';
import { DashboardStoreService } from '../../services/dashboard.store.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, catchError, throwError } from 'rxjs';
import {
  FilterationResoursesItem,
  IGetFilteredResourcesPayload,
  IGetLanguagesResponse,
  IGetSupportedDevicesResponse,
  IPagination,
} from '../../models';
import { PaginatorState } from 'primeng/paginator';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'dashboard-localization',
  standalone: true,
  imports: [
    GetControlPipe,
    SharedSelectComponent,
    SharedButtonComponent,
    SharedInputComponent,
    SharedtableComponent,
    //  TranslateModule,
    SharedIconComponent,
  ],
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
})
export default class LocalizationComponent implements OnInit {
  languagesIsLoading: boolean = false;
  languages: IGetLanguagesResponse[] = [];

  supportedDevicesIsLoading: boolean = false;
  supportedDevices: IGetSupportedDevicesResponse[] = [];

  dataTableIsLoading: boolean = false;
  dataTable: FilterationResoursesItem[] = [];

  pagination: IPagination = {
    itemsPerPage: [5, 10, 30, 50, 100],
    currentPage: 1,
    pageSize: 5,
    totalItems: 0,
    orderBy: null,
    sortDirection: null,
  };

  form!: FormGroup;

  constructor(private _FormBuilder: FormBuilder, private _DashboardStoreService: DashboardStoreService) {}

  ngOnInit(): void {
    this.getLanguages();
    this.getSupportedDevices();
    this.createForm();
  }

  createForm() {
    this.form = this._FormBuilder.group({
      language: [1, [Validators.required]],
      supportedDevices: [null, []],
      translationKey: [null, []],
      translationKeyValue: [null, []],
    });
  }

  onSelection(value: string) {
    // console.warn(value);
  }

  onPageChange(pagination: PaginatorState) {
    this.pagination = { ...this.pagination, currentPage: pagination.page! + 1, pageSize: pagination.rows! };

    this.submit(false);
  }

  getLanguages() {
    (this.languagesIsLoading = true),
      this._DashboardStoreService
        .getLanguagesResponse()
        .pipe(
          untilDestroyed(this),
          finalize(() => (this.languagesIsLoading = false)),
          catchError((error) => {
            return throwError(() => error);
          })
        )
        .subscribe((languages) => {
          this.languages = languages;
        });
  }

  getSupportedDevices() {
    (this.supportedDevicesIsLoading = true),
      this._DashboardStoreService
        .getSupportedDevicesResponse()
        .pipe(
          untilDestroyed(this),
          finalize(() => (this.supportedDevicesIsLoading = false)),
          catchError((error) => {
            return throwError(() => error);
          })
        )
        .subscribe((supportedDevices) => {
          this.supportedDevices = supportedDevices;
        });
  }

  submit(submitFromForm: boolean) {
    if (this.form.valid) {
      this.dataTableIsLoading = true;

      let payload: IGetFilteredResourcesPayload = {
        languageId: this.form.value.language,
        pageNumber: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
        orderBy: this.pagination.orderBy,
        sortDirection: this.pagination.sortDirection,
        key: this.form.value.translationKey,
        resourceType: this.form.value.supportedDevices,
        text: this.form.value.translationKeyValue,
      };

      this._DashboardStoreService
        .getFilteredResourcesResponse(payload)
        .pipe(
          untilDestroyed(this),
          finalize(() => (this.dataTableIsLoading = false)),
          catchError((error) => {
            return throwError(() => error);
          })
        )
        .subscribe((data) => {
          this.dataTable = data.items;
          this.pagination = {
            ...this.pagination,
            totalItems: data.totalItems,
            currentPage: submitFromForm ? 1 : this.pagination.currentPage,
          };
        });
    }
  }
}
