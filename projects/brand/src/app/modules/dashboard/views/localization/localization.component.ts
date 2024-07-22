import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  DialogService,
  GetControlPipe,
  SharedAccordionComponent,
  SharedButtonComponent,
  SharedIconButtonComponent,
  SharedIconComponent,
  SharedInputComponent,
  SharedSelectComponent,
  SharedTableComponent,
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
import { MatTooltipModule } from '@angular/material/tooltip';
import LocalizationAddResourseComponent from '../../components/localization-add-resourse/localization-add-resourse.component';
import LocalizationEditResourseComponent from '../../components/localization-edit-resourse/localization-edit-resourse.component';
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
    SharedTableComponent,
    //  TranslateModule,
    SharedIconComponent,
    SharedIconButtonComponent,
    MatTooltipModule,
    SharedAccordionComponent,
  ],
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
})
export default class LocalizationComponent implements OnInit {
  @ViewChild(SharedAccordionComponent, { static: true }) sharedAccordionComponent!: SharedAccordionComponent;

  languagesIsLoading: boolean = false;
  languages: IGetLanguagesResponse[] = [];

  supportedDevicesIsLoading: boolean = false;
  supportedDevices: IGetSupportedDevicesResponse[] = [];

  dataTableIsLoading: boolean = false;
  dataTable: FilterationResoursesItem[] = [];

  deletingIsLoading: boolean = false;

  pagination: IPagination = {
    itemsPerPage: [5, 10, 30, 50, 100],
    currentPage: 1,
    pageSize: 5,
    totalItems: 0,
    orderBy: null,
    sortDirection: null,
  };

  form!: FormGroup;

  constructor(
    private _FormBuilder: FormBuilder,
    private dialogService: DialogService,
    private _DashboardStoreService: DashboardStoreService
  ) {}

  ngOnInit(): void {
    this.getLanguages();
    this.getSupportedDevices();
    this.createForm();
    this.submit(false);
  }

  createForm() {
    this.form = this._FormBuilder.group({
      language: [null, []],
      supportedDevices: [null, []],
      translationKey: [null, []],
      translationKeyValue: [null, []],
    });
  }

  resetForm() {
    this.form.reset();
    this.submit(false);
  }

  toggleAdvancedSearsh() {
    this.sharedAccordionComponent.toggle(0);
  }

  onPageChange(pagination: PaginatorState) {
    this.pagination = { ...this.pagination, currentPage: pagination.page! + 1, pageSize: pagination.rows! };
    this.submit(false);
  }

  getLanguages() {
    this.languagesIsLoading = true;
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
    this.supportedDevicesIsLoading = true;
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
    if (this.form.valid || !submitFromForm) {
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

  addResource() {
    this.dialogService
      .openDialog(LocalizationAddResourseComponent, {
        disableClose: true,
        panelClass: 'side-dialog',
        enterAnimationDuration: '0ms',
        exitAnimationDuration: '0ms',
      })
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        if (data && data.isConfirmed) this.submit(false);
      });
  }

  deleteResource(item: FilterationResoursesItem) {
    this.dialogService
      .openConfirmationDialog({
        data: {
          title: 'delete resourse',
          subTitle: 'are you sure for deleting resource',
          focused: item.key,
        },
        disableClose: true,
        minWidth: '50vw',
      })
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        if (data && data.isConfirmed) {
          this._DashboardStoreService
            .DeleteResource({ ids: [item.id] })
            .pipe(
              untilDestroyed(this),
              finalize(() => (this.dataTableIsLoading = false)),
              catchError((error) => {
                return throwError(() => error);
              })
            )
            .subscribe((data) => {
              if (data && data.isSuccessfull) {
                this.submit(false);
              }
            });
        }
      });
  }

  editResource(item: FilterationResoursesItem) {
    this.dialogService
      .openDialog(LocalizationEditResourseComponent, {
        disableClose: true,
        panelClass: 'side-dialog',
        enterAnimationDuration: '0ms',
        exitAnimationDuration: '0ms',
        data: item,
      })
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        if (data && data.isConfirmed) this.submit(false);
      });
  }
}
