import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SharedButtonComponent, SharedIconButtonComponent, SharedIconComponent } from '@library';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    TranslateModule,
    SharedIconComponent,
    SharedButtonComponent,
    SharedIconButtonComponent,
  ],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export default class ButtonsComponent {
  constructor(private _MatSnackBar: MatSnackBar, private _TranslateService: TranslateService) {}
  showCopyToaster(className: string) {
    this._MatSnackBar.open(
      `${className} ${this._TranslateService.instant('shared.toaster.copyed')}`,
      this._TranslateService.instant('shared.buttons.close')
    );
  }

  clicked(event: any) {
    console.warn(event);
    console.warn('clicked');
  }
}
