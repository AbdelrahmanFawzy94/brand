import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SharedAccordionComponent, SharedIconComponent, SharedTableComponent } from '@library';
import { PaginatorState } from 'primeng/paginator';
import { SamplesStoreService } from '../../services/samples.store.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    SharedIconComponent,
    TranslateModule,
    SharedAccordionComponent,
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export default class AccordionComponent implements OnInit {
  constructor(
    private _samplesStoreService: SamplesStoreService,
    private _MatSnackBar: MatSnackBar,
    private _TranslateService: TranslateService
  ) {}

  ngOnInit(): void {}

  test(data: any) {
    console.log(data);
  }

  showCopyToaster(className: string) {
    this._MatSnackBar.open(
      `${className} ${this._TranslateService.instant('shared.toaster.copyed')}`,
      this._TranslateService.instant('shared.buttons.close')
    );
  }
}
