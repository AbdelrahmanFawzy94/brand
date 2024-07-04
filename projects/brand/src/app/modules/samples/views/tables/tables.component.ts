import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SharedIconComponent, SharedTableComponent } from '@library';
import { PaginatorState } from 'primeng/paginator';
import { SamplesStoreService } from '../../services/samples.store.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    SharedIconComponent,
    TranslateModule,
    SharedTableComponent,
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export default class TablesComponent implements OnInit {
  fakeData: Item[] = [];
  itemsPerPageSelected: number = 10;
  itemsPerPage: number[] = [5, 10, 20, 40];
  pageNumber: number = 0;
  totalItems: number = 0;

  constructor(
    private _samplesStoreService: SamplesStoreService,
    private _MatSnackBar: MatSnackBar,
    private _TranslateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  onPageChange(e: PaginatorState) {
    this.itemsPerPageSelected = e.rows!;
    this.pageNumber = e.page!;
    this.getData();
  }

  getData() {
    this._samplesStoreService
      .getSamplesTableData()
      .pipe(untilDestroyed(this))
      .subscribe((tableData) => {
        this.fakeData = tableData.items;
        this.pageNumber = tableData.offset;
        this.totalItems = tableData.totalItemsCount;
      });
  }

  showCopyToaster(className: string) {
    this._MatSnackBar.open(
      `${className} ${this._TranslateService.instant('shared.toaster.copyed')}`,
      this._TranslateService.instant('shared.buttons.close')
    );
  }
}

export interface Item {
  hasActions: boolean;
  assessmentTypeId: number;
  assessmentCategoryId: string;
  id: string;
  requestNumber: string;
  requestTitle: any;
  productName: any;
  requestTypeId: number;
  requestSubTypeId: any;
  serviceTypeId: number;
  requesterContactId: string;
  requesterContactOfficialId: any;
  requesterProfileId: string;
  createDate: string;
  requestStatusId: number;
  requestStatusHasAssingee: boolean;
  assigneeProfileId: any;
  publicStatusId: number;
  assignedEntityId: any;
  linkedEntityId: string;
  linkedEntityName: any;
  linkedEntityEnglishName: any;
  lastComment: any;
  previousComment: any;
  relatedDocuments: any[];
  availableActions: any;
  rating: any;
}

interface FakeData {
  offset: number;
  totalItemsCount: number;
  items: Item[];
}
