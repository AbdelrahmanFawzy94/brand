import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SharedIconButtonComponent } from '../icon-button/icon-button.component'; // TODO
import { TableColumn } from '@library';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, TranslateModule, TableModule, PaginatorModule, SharedIconButtonComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class SharedtableComponent {
  @Input({ required: true }) data!: any[];
  @Input({ required: true }) columns!: TableColumn[];
  @Input() isLoading: boolean = false;
  @Input() numberOfItems: number = 5;
  @Input() itemsPerPage: number[] = [5, 10, 20, 30];
  @Input() totalItems: number = 0;
  @Output() onPage = new EventEmitter<PaginatorState>();

  constructor() {}

  onPageChange(e: PaginatorState) {
    this.onPage.emit(e);
  }
}
