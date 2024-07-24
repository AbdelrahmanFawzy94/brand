import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SharedIconButtonComponent } from '../icon-button/icon-button.component'; // TODO
import { SharedSelectComponent, SharedSvgNoDataComponent, SharedSvgNoSearchDataComponent, TableColumn } from '@library';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgTemplateOutlet,
    TranslateModule,
    TableModule,
    PaginatorModule,
    SharedIconButtonComponent,
    SharedSvgNoDataComponent,
    SharedSvgNoSearchDataComponent,
    SharedSelectComponent,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class SharedTableComponent implements OnChanges {
  @ViewChild(Paginator, { static: true }) paginator!: Paginator;

  @Input({ required: true }) currentPage!: number;
  @Input({ required: true }) data!: any[];
  @Input({ required: true }) columns!: TableColumn[];

  @Input() isLoading: boolean = false;
  @Input() itemsPerPage: number[] = [5, 10, 20, 50];
  @Input() itemsPerPageSelected: number = 5;
  @Input() totalItems: number = 0;

  @Output() onPage = new EventEmitter<PaginatorState>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currnetPage']) {
      this.paginator.changePage(this.currentPage);
    }
  }

  onPageChange(e: PaginatorState) {
    this.onPage.emit(e);
  }

  onItemsPerPageSelection(itemsPerPageSelected: number) {
    this.paginator.paginatorState.rows = itemsPerPageSelected;
    this.onPageChange(this.paginator.paginatorState);
  }
}
