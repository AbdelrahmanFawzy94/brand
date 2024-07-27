import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { SharedButtonComponent } from '../button/button.component';
import { SharedIconComponent } from '../icon/icon.component';

@Component({
  selector: 'lib-confirmation-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    SharedButtonComponent,
    SharedIconComponent,
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; subTitle: string; focused: string }) {}
}
