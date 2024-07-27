import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';
import { SharedConfirmationDialogComponent } from '../components';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmationDialog(dialogConfig: MatDialogConfig): Observable<{ isConfirmed: boolean }> {
    let dialogRef = this.dialog.open(SharedConfirmationDialogComponent, dialogConfig);
    return dialogRef.afterClosed();
  }

  openDialog<T>(component: ComponentType<T>, dialogConfig: MatDialogConfig): Observable<{ isConfirmed: boolean }> {
    let dialogRef = this.dialog.open(component, dialogConfig);
    return dialogRef.afterClosed();
  }
}
