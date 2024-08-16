import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SharedToasterComponent } from '../components';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  duration: number = 10; // as seconds
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  constructor(private _snackBar: MatSnackBar) {}

  openToaster(
    message: string,
    severity: 'success' | 'danger' | 'info' | 'warning' | null,
    durationInSeconds?: number,
    verticalPosition?: MatSnackBarVerticalPosition | null,
    horizontalPosition?: MatSnackBarHorizontalPosition | null
  ): Observable<MatSnackBarDismiss> {
    return this._snackBar
      .openFromComponent(SharedToasterComponent, {
        duration: durationInSeconds ? durationInSeconds * 1000 : this.duration * 1000,
        data: { message: this._TranslationApisService.instant(message), severity },
        verticalPosition: verticalPosition ? verticalPosition : this.verticalPosition,
        horizontalPosition: horizontalPosition ? horizontalPosition : this.horizontalPosition,
      })
      .afterDismissed();
  }

  openCustomTemplateToaster(template: TemplateRef<any>, durationInSeconds?: number): Observable<MatSnackBarDismiss> {
    return this._snackBar
      .openFromTemplate(template, {
        duration: durationInSeconds ? durationInSeconds * 1000 : this.duration * 1000,
      })
      .afterDismissed();
  }
}
