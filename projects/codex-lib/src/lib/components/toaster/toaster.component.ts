import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { IToaster } from '@library/lib/models';
import { SharedIconButtonComponent } from '..';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'lib-toaster',
  standalone: true,
  imports: [SharedIconButtonComponent],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class SharedToasterComponent {
  constructor(public MatSnackBarRef: MatSnackBarRef<SharedToasterComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: IToaster) {}
}
