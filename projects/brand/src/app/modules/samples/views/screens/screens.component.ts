import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SharedIconComponent } from '@library';

@Component({
  selector: 'app-screens',
  standalone: true,
  imports: [CommonModule, ClipboardModule, MatButtonModule, MatTooltipModule, MatSnackBarModule, TranslateModule, SharedIconComponent],
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
})
export default class ScreensComponent {
  showCopyToaster(className: string) {
    this._MatSnackBar.open(
      `${className} ${this._TranslateService.instant('shared.toaster.copyed')}`,
      this._TranslateService.instant('shared.buttons.close')
    );
  }
  constructor(private _MatSnackBar: MatSnackBar, private _TranslateService: TranslateService) {}
}
